import axios from 'axios';

/**
 * Configuração base para requisições na API do Twitter.
 */
const options = {
  method: 'GET',
  url: `${process.env.REACT_APP_TWITTER_API_URL}`,
  params: {
    max_results: '10',
    next_token: null,
    expansions: 'attachments.media_keys,author_id',
    'tweet.fields':
      'attachments,author_id,created_at,entities,id,possibly_sensitive,referenced_tweets,text',
    'media.fields': 'alt_text,media_key,type,url,height,width',
    'user.fields': 'id,name,profile_image_url,username',
  },
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
  },
};

/**
 * Normaliza uma string, removendo acentos, caracteres especiais, convertendo
 * para minúsculas e removendo números no início e adicionando # no início.
 * @param {string} str
 * @returns {string} _str
 */
export function normalizeString(str) {
  // TODO Validação se parâmetro é string ou try/catch
  const _str = str
    .normalize('NFD') // Normaliza tudo que não for ASCII
    .toLowerCase() // Converte para minúsculas
    .replace(/\W/g, '') // Remove caracteres especiais (não número e não letras)
    .replace(/^[0-9]+/g, ''); // Remove números no início
  return _str;
}

/**
 * Busca os dados da API do Twitter. Depende da constante global: options
 * @returns {Array} data
 */
async function getData(tag) {
  try {
    options.params.query = normalizeString(tag);
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('getData.catch', error);
    return [];
  }
}

/**
 * Verrica se o tweet contém a hashtag informada como parâmetro
 * @param {Object} tweet
 * @returns {boolean}
 */
function containsHashtag(tweet) {
  try {
    let contains = false;
    if (tweet.entities && tweet.entities.hashtags) {
      tweet.entities.hashtags.filter((tag) => {
        if (normalizeString(tag.tag) === options.params.query) contains = true;
      });
    }
    return contains;
  } catch (error) {
    console.log('containsHashtag.catch', error);
    return false;
  }
}

/**
 * Busca os dados da API do Twitter e retorna um objeto com os
 * tweets e imagens encontrados
 * @returns {Object}
 */
export async function doTheMagic(hashtag, nextToken = null) {
  const dataLimit = 10; // limite para tweets
  let tweets = []; // Armazena objetos tweets

  if (nextToken) options.params.next_token = nextToken; // Se passado token de paginação, adiciona ao parâmetro

  await getData(hashtag, nextToken)
    .then((data) => {
      console.log(data);
      data.data.map((tweet) => {
        if (
          containsHashtag(tweet) && // O tweet contém a hashtag  // Sob o CORS, não é possível enviar o # dentro do parâmetro query
          !tweet.possibly_sensitive // O tweet não é sensível
          // && !tweet.referenced_tweets      // O tweet não é um retweet
        ) {
          let tweetObj = tweet;

          // Para cada tweet, procura o usuário
          data.includes.users.filter((user) => {
            if (user.id === tweet.author_id) {
              tweetObj.user = user;
            }
          });

          // Para cada tweet, procura a mídia e adiciona ao array de imagens, se o tweet tiver mídia

          if (data.includes && data.includes.media) {
            data.includes.media.filter((media) => {
              if (tweet.attachments && tweet.attachments.media_keys[0]) {
                if (
                  media.media_key === tweet.attachments.media_keys[0] &&
                  media.type === 'photo'
                ) {
                  tweetObj.media = media;
                }
              }
            });
          }

          if (data.meta.next_token)
            options.params.next_token = data.meta.next_token;

          tweets.push(tweetObj);
        }
      });
    })
    .catch((err) => {
      console.log('doTheMagic.catch', err);
      return {
        tweets: tweets,
        hashtag: hashtag,
        nextToken: null,
      };
    });

  return {
    tweets: tweets,
    hashtag: hashtag,
    nextToken: options.params.next_token,
  };
}

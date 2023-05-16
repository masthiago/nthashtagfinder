import axios from 'axios';

// TODO Talvez onverter esse conjunto de funções em uma classe

/**
 * Configuração base para requisições na API do Twitter.
 */
const options = {
  method: 'GET',
  url: 'https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent',
  params: {
    max_results: '100',
    next_token: null,
    expansions: 'attachments.media_keys,author_id',
    'tweet.fields':
      'attachments,author_id,created_at,entities,id,possibly_sensitive,referenced_tweets,text',
    'media.fields': 'alt_text,media_key,type,url',
    'user.fields': 'id,name,profile_image_url,username',
  },
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
  },
};

/**
 * Normaliza uma string, removendo acentos, caracteres especiais, convertendo 
 * para minúsculas e removendo números no início
 * @param {string} str
 * @returns {string} _str
 */
function normalizeString(str) {
  // TODO Validação se parâmetro é string ou try/catch
  const _str = str
    .normalize('NFD')         // Normaliza tudo que não for ASCII
    .toLowerCase()            // Converte para minúsculas
    .replace(/\W/g, '')       // Remove caracteres especiais (não número e não letras)
    .replace(/^[0-9]+/g, ''); // Remove números no início
  return _str;
}

/**
 * Busca os dados da API do Twitter. Depende da constante global: options
 * @returns {Array} data
 */
async function getData(tag) {
  //
  try {
    options.params.query = normalizeString(tag);
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
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
    if (tweet.entities.hashtags) {
      tweet.entities.hashtags.filter((tag) => {
        if (normalizeString(tag.tag) === options.params.query) contains = true;
      });
    }
    return contains;
  } catch (error) {
    return false;
  }
}

/**
 * Busca os dados da API do Twitter e retorna um objeto com os 
 * tweets e imagens encontrados
 * @returns {Object} {
 *     tweets: tweets,      // Qualquer tweet
 *     images: images,      // Tweet com imagem
 *     hashtag: hashtag,    // Hashtag passada
 *     error: error,        // Mensagem de erro vindo catch
 *   }
 */
export async function doTheMagic(hashtag, nextToken = null) {  
  const dataLimit = 10;   // limite para tweets e imagens
  const pagesLimit = 25;  // Limite de páginas. É interessante limitar o número de páginas devido restrições de requisições repetidas na API.
  let error = null;       // Para exbir ou tratar erros
  let images = [];        // Armazena objetos tweets que contênham mídia tipo photo { tweet: {}, user: {}, media: {} }
  let pages = 1;          // Contador de páginas.
  let tweets = [];        // Armazena objetos tweets que contênham mídia tipo photo ou não { tweet: {}, user: {}, media: {} }

  if (nextToken) options.params.next_token = nextToken; // Se passado token de paginação, adiciona ao parâmetro

  try {
    do {
      // Executa o código abaixo pelo menos uma vez
      const data = await getData(hashtag); // Busca os dados da API a partir da página atual

      // Percorre os tweets retornados
      data.data.map((tweet) => {
        if (
          containsHashtag(tweet) &&
          !tweet.possibly_sensitive &&
          !tweet.referenced_tweets
        ) {
          let tweetObj = { tweet: tweet };

          // Para cada tweet, procura o usuário
          data.includes.users.filter((user) => {
            if (user.id === tweet.author_id) {
              tweetObj.user = user;
            }
          });

          // Para cada tweet, procura a mídia e adiciona ao array de imagens, se o tweet tiver mídia
          data.includes.media.filter((media) => {
            if (tweet.attachments && tweet.attachments.media_keys[0]) {
              if (
                media.media_key === tweet.attachments.media_keys[0] &&
                media.type === 'photo'
              ) {
                tweetObj.media = media;
                if (images.length < dataLimit) images.push(tweetObj); // Se ainda não atingiu o limite de imagens, adiciona
              }
            }
          });

          if (tweets.length < dataLimit) tweets.push(tweetObj); // Se ainda não atingiu o limite de tweets, adiciona
        }
      });

      if (data.meta.next_token) {
        // Se houver token de paginação na resposta atual, atualiza o parâmetro para a próxima página
        options.params.next_token = data.meta.next_token;
        pages++; // Incrementa o contador de páginas percorridas (próxima página)
      } else {
        delete options.params.next_token; // Se não houver token de paginação, remove o parâmetro
      }
    } while ( // Executará o código acima se as condições a seguir forem satisfeitas
      (tweets.length < dataLimit || images.length < dataLimit) // Algum dos arrays de tweets ainda estiver com menos que 10 itens
      && options.params.next_token // e houver um token para uma próxima página
      && pages < pagesLimit // e não houver atingido o número de páginas a percorrer. 
    );
  } catch (err) {
    error = err.message;
  }
  return {
    tweets: tweets,
    images: images,
    hashtag: hashtag,
    nextToken: options.params.next_token || null,
    error: error,
  };
}

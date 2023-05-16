import axios from 'axios';

const dataLimit = 10; // Limit for tweets and images
const pagesLimit = 5; // Pages limit. It is interesting to limit the number of pages due to repeated request restrictions on the API.

let allData = []; // Stores all data for the infinite scroll
let nextToken = null; // Pagination token
let pages = 0; // Page counter

/**
 * Base setting for Twitter API requests.
 */
const options = {
  method: 'GET',
  url: 'https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent',
  params: {
    max_results: '10',
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
 * Normalize a string. Remove accents, special characters, convert to
 * lowercase and removing numbers at the beginning.
 * @param {string} str
 * @returns {string} _str
 */
function normalizeString(str) {
  try {
    return str
      .normalize('NFD') // Normalizes everything that is not ascii
      .toLowerCase() // Converts to lowercase
      .replace(/\W/g, '') // Removes special characters (not number and not letters)
      .replace(/^[0-9]+/g, ''); // Removes numbers at the beginning
  } catch {
    return null;
  }
}

/**
 * Search the Twitter API data.
 * For config param, always use the global constant: options
 * @param {string} tag
 * @param {Object} config
 * @returns
 */
async function getData(tag, nextToken = null, config = options) {
  //
  try {
    config.params.query = normalizeString(tag);
    config.params.next_token = nextToken;
    console.log('getData', 'config', config);
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error('getData', error);
    return null;
  }
}



export async function doTheMagic(hashtag, nextToken = null) {
  let tweets = [];

  do {
    const data = await getData(hashtag);

    if (data && data.data) {
      data.data.map(function (tweet) {
        if (!tweet.possibly_sensitive && !tweet.referenced_tweets) {
          
          if (tweets.attachments && tweets.attachments.media_keys) {
            tweet.attachments.media_keys.map(function (mediaKey) {
              data.includes.media.map(function (mediaData) {
                if (mediaData.media_key === mediaKey) {
                  tweet['media'] = mediaData;// Não está dicionando ao objeto
                }
              });
            });
          }

          tweets.push(tweet);
        }
      });
    }

    data.meta.next_token
      ? (nextToken = data.meta.next_token)
      : (nextToken = null);

    pages++;

    // console.log(
    //   'doTheMagic',
    //   nextToken,
    //   pages,
    //   pagesLimit,
    //   tweets.length,
    //   dataLimit
    // );
  } while (nextToken && pages < pagesLimit && tweets.length < dataLimit);

  pages = 0;

  console.log('doTheMagic', 'tweets', tweets);

  return tweets;
}

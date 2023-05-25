import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://api.airtable.com/v0/app6wQWfM6eJngkD4',
  headers: {
    Authorization: 'Bearer keykXHtsEPprqdSBF',
  },
});

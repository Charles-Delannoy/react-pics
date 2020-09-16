import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fhh6L2Nn4UlNWRso8DCVwK6G8lIhX5CE6THgurkLJHY'
  }
});

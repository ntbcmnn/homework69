import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://api.tvmaze.com/',
});

export default axiosAPI;
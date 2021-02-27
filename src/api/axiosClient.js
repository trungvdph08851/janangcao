import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://6034a8ba843b150017932f89.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});
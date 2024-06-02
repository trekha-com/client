import axios from 'axios';
import { redirect } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL is not defined. Please set the BASE_URL environment variable.');
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // TODO if session token, set a Bearer Authorization token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to the login page if a 401 Unauthorized response is received
      redirect('/login');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

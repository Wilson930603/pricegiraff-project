import axios from 'axios';
import { join } from 'path';

export default class BaseService {
  constructor(path) {
    const baseURL =
      (process.env.REACT_APP_API_URL || '') + join('/api/v1', path);

    const axiosInstance = axios.create({ baseURL });
    axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    });
    axiosInstance.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject({ message: error.message, ...error.response })
    );

    this.axios = axiosInstance;
  }

  fetchOne(id) {
    return this.axios.get(`/${id}`);
  }

  fetchMany(params = {}) {
    return this.axios.get('/', { params });
  }

  create(data) {
    return this.axios.post('/', data);
  }

  update(id, data) {
    return this.axios.put(`/${id}`, data);
  }

  delete(id) {
    return this.axios.delete(`/${id}`);
  }
}

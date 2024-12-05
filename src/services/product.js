import BaseService from './base';

export default class ProductService extends BaseService {
  constructor() {
    super('/products');
  }

  fetchSimilar(productId, params = {}) {
    return this.axios.get(`/${productId}/similar_products`, { params });
  }

  // Price History
  fetchPriceHistory(productId, params = {}) {
    return this.axios.get(`/${productId}/price_histories`, { params });
  }

  // Sellers
  fetchSellers(productId, params = {}) {
    return this.axios.get(`/${productId}/sellers`, { params });
  }

  // Alerts
  addAlert(productId) {
    return this.axios.post(`/${productId}/alerts`);
  }

  removeAlert(productId) {
    return this.axios.delete(`/${productId}/alerts`);
  }

  // Favorites
  addFavorite(productId) {
    return this.axios.post(`/${productId}/favorites`);
  }

  removeFavorite(productId) {
    return this.axios.delete(`/${productId}/favorites`);
  }
}

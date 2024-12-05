import BaseService from './base';

export default class SearchingService extends BaseService {
  constructor() {
    super('/searchings');
  }

  async search({ keyword, limit = 3 } = {}) {
    const { data } = await this.axios.get('/closest_matches', {
      params: { top_k: limit, keyword }
    });

    return data.closest_matches;
  }

  async fetchPopularSearch({ limit = 3 } = {}) {
    const { data } = await this.axios.get('/popular_searches', {
      params: { top_k: limit }
    });

    return data.popular_searches;
  }
}

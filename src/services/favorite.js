import BaseService from './base';

export default class FavoriteService extends BaseService {
  constructor() {
    super('/favorites');
  }
}

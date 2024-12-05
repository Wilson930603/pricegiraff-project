import BaseService from "./base";

export default class CategoryService extends BaseService {
  constructor() {
    super('/categories')
  }

  async fetchAll() {
    const { data } = await this.fetchMany({ per_page: 100 })
    return data.categories
  }

  async fetchOne(id) {
    const categories = await this.fetchAll()
    return categories.find(category => category.id === id)
  }
}

import BaseService from "./base";

export default class AlertService extends BaseService {
  constructor() {
    super('/alerts')
  }
}

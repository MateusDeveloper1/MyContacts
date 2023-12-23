import HttpClient from './utils/HttpClient';

class ContegoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new ContegoriesService();

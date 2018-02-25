import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';
import {Injectable} from "@angular/core";

@Injectable()
export class CategoryService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getCategories() {
    return this.get('/categories');
  }

  create(body) {
    return this.post('/categories', body);
  }
}

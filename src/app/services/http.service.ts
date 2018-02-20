import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class HttpService {

  protected resourcesUrl: string;
  protected resourceUrl: string;
  protected url: string;

  constructor(protected http: HttpClient) {
    this.url = environment.apiUrl;
    this.resourcesUrl = '';
    this.resourceUrl = '';
  }

}

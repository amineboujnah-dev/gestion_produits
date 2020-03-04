import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../model/product.model';

@Injectable({
  providedIn: 'root' // le service est déclaré dans app.module.ts
})
export class CatalogueService {
  public host: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { } // injecter le service HttpClient
  public getProducts(page: number, size: number) {
    return this.httpClient.get(this.host + '/produits?page=' + page + '&size=' + size);
  }
  public getProductsByKeyword(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + '/produits/search/byDesignationPage?mc=' + mc + '&page=' + page +
    '&size=' + size);
  }
  public deleteResource(url) {
    return this.httpClient.delete(url);
  }

  public saveResource(url, data) { // post = url + envoi data
    return this.httpClient.post<ProductModel>(url, data);
  }
  public getResource(url): Observable<ProductModel> { // post = url + envoi data
    return this.httpClient.get<ProductModel>(url);
  }
  public updateResource(url, data) { // post = url + envoi data
    return this.httpClient.put(url, data);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Def } from './def';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  get getAll() {
    return this.http.post<Def>('/items/getall', {});
  }

  getItem(data) {
    return this.http.post<Def>('/items/getitem', data);
  }

  restockItem(data) {
    return this.http.post<Def>('/items/restock', data);
  }
}

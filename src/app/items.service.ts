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

  get getAllRentalItems() {
    return this.http.post<Def>('/get/inventory/items/rental', {});
  }

  getItem(data) {
    return this.http.post<Def>('/items/getitem', data);
  }

  restockItem(data) {
    return this.http.post<Def>('/items/restock', data);
  }

  getStockByDate(data) {
    return this.http.post<Def>('/items/stockbydate', data);
  }

  returnToCompany(data) {
    return this.http.post<Def>('/company/returnmt', data);
  }

}

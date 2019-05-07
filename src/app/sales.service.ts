import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Def } from './def';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private http: HttpClient
  ) { }

  makeASale(data) {
    return this.http.post<Def>('/sales/makeone', data);
  }

  getAll() {
    return this.http.post<Def>('/sales/getall', {});
  }

  getPrevBalance(data) {
    return this.http.post<Def>('/customers/balancepending', data);
  }

  getSalesEmptySpecific() {
    return this.http.post<Def>('/customers/empty/sales/specific', {});
  }

  clearEmpty(data) {
    return this.http.post<Def>('/clear/record', data);
  }

  returnCrate(data) {
    return this.http.post<Def>('/sale/return', data);
  }

  autoDepositOnSale(data) {
    return this.http.post<Def>('/sale/autodeposit', data);
  }

  depositOnSale(data) {
    return this.http.post<Def>('/sale/deposit', data);
  }

  completeSale(data) {
    return this.http.post<Def>('/sale/complete', data);
  }

  rentOut(data) {
    return this.http.post<Def>('/rent/out', data);
  }

  getAllSalesDetails() {
    return this.http.post<Def>('/sales/details', {});
  }

  getDepartureDetails(data) {
    return this.http.post<Def>('/sales/departures', data);
  }
  
  getByDate(data) {
    return this.http.post<Def>('/sales/getbydate', data);
  }
}

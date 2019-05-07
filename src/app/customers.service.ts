import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Def } from './def';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.post<Def>('/customers/getall', {});
  }

  insert(data) {
    return this.http.post<Def>('/customers/insert', data);
  }

  clearAllBalance(data) {
    return this.http.post<Def>('/customers/autodeposit', data);
  }

  updateHDis(data) {
    return this.http.post<Def>('/customers/update/hdis', data);
  }

  dateWise(data) {
    return this.http.post<Def>('/customers/datewise', data);
  }
}

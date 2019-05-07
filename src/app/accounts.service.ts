import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Def } from './def';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private http: HttpClient
  ) { }

  getCapital() {
    return this.http.post<Def>('/account/getcapital', {});
  }

  transferToBank(data) {
    return this.http.post<Def>('/account/transfertobank', data);
  }

  transferToStore(data) {
    return this.http.post<Def>('/account/transfertostore', data);
  }
}

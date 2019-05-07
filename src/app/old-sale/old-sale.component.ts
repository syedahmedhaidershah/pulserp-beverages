import { Component, OnInit, Inject } from '@angular/core';
import { ItemsService } from '../items.service';
import { SalesService } from '../sales.service';
import { CustomersService } from '../customers.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-old-sale',
  templateUrl: './old-sale.component.html',
  styleUrls: ['./old-sale.component.css']
})
export class OldSaleComponent implements OnInit {

  receipient = '';
  dateToday = '';
  data: any = {
    data: [],
    salesman: {}
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public injected: any,
    private ref: MatDialogRef<OldSaleComponent>,
    private items: ItemsService,
    private sales: SalesService,
    private salesman: CustomersService
  ) { }

  ngOnInit() {
    this.dateToday = new Date().toLocaleString();
    this.receipient = this.data.salesman.name;
    this.items.getAll.subscribe(res => {
      if (!(res.error)) {
        this.data.data = [];
        res.message.forEach(v => {
          const toPush = {
            data: v,
            onList: 0
          };
          this.injected.data.forEach(item => {
            if (v.item_id === item.item_id) {
              toPush.onList = item.quantity;
            }
          });
          this.data.data.push(toPush);
        });
      }
    });
    this.data.salesman = {};
    this.injected.data.forEach(val => {
      for (let i = 50; i <= 68; i++) {
        const useKey = 'h'.concat(i.toString());
        this.data.salesman[useKey] = val[useKey];
      }
    });
  }

  printWindow() {
    window.print();
  }

  cancel() {
    this.ref.close();
  }

  getHDisc(itemData) {
    const id = itemData.item_id;
    return this.data.salesman['h'.concat(id.toString())];
  }

  getNet(item) {
    const id = item.data.item_id;
    return item.data.selling - item.data.cscheme - this.data.salesman['h'.concat(id.toString())];
    // return item.data.selling * item.onList - item.data.cscheme - this.data.salesman['h'.concat(id.toString())];
  }

  getTDisc(item) {
    const id = item.data.item_id;
    return item.onList * (item.data.cscheme + this.data.salesman['h'.concat(id.toString())]);
  }

  getTBalance(i) {
    return this.getNet(i) * i.onList;
  }

  getTotalOnList() {
    let count = 0;
    this.data.data.forEach(v => {
      count += v.onList;
    });
    return count;
  }

  getTotalDisOnList() {
    let tdis = 0;
    this.data.data.forEach(v => {
      tdis += this.getTDisc(v);
    });
    return tdis;
  }

  getTotalBalOnList() {
    let tbal = 0;
    this.data.data.forEach(v => {
      tbal += this.getTBalance(v);
    });
    return tbal;
  }

}

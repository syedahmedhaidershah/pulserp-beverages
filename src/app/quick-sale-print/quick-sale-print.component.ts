import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quick-sale-print',
  templateUrl: './quick-sale-print.component.html',
  styleUrls: ['./quick-sale-print.component.css']
})
export class QuickSalePrintComponent implements OnInit {

  receipient = '';
  dateToday = '';

  constructor(
    private ref: MatDialogRef<QuickSalePrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.dateToday = new Date().toLocaleString();
    this.receipient = this.data.salesman.name;
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

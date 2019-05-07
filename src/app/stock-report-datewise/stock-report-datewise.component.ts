import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-stock-report-datewise',
  templateUrl: './stock-report-datewise.component.html',
  styleUrls: ['./stock-report-datewise.component.css']
})
export class StockReportDatewiseComponent implements OnInit {

  dateToday = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<StockReportDatewiseComponent>
  ) { }

  ngOnInit() {
    this.dateToday = new Date().toDateString();
  }

  getLocalDT(dt) {
    return new Date(dt).toLocaleString();
  }

  printWindow() {
    window.print();
  }

  cancel() {
    this.ref.close();
  }
}

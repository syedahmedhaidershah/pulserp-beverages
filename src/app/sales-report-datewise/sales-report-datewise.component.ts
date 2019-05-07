import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sales-report-datewise',
  templateUrl: './sales-report-datewise.component.html',
  styleUrls: ['./sales-report-datewise.component.css']
})
export class SalesReportDatewiseComponent implements OnInit {

  dateToday = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<SalesReportDatewiseComponent>
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

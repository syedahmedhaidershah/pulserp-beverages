import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MakeASaleComponent } from '../make-a-sale/make-a-sale.component';
import { RentOutFormComponent } from '../rent-out-form/rent-out-form.component';

@Component({
  selector: 'app-home-col1',
  templateUrl: './home-col1.component.html',
  styleUrls: ['./home-col1.component.css']
})
export class HomeCol1Component implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  makeASale() {
    const ref = this.dialog.open(MakeASaleComponent, {
      height: (window.innerHeight - 10).toString().concat('px'),
      width: (window.innerWidth - 10).toString().concat('px'),
      maxWidth: (window.innerWidth - 100).toString().concat('vw'),
      panelClass: 'md-p-0'
    });
  }

  rentOut() {
    const ref = this.dialog.open(RentOutFormComponent, {
      height: (window.innerHeight * 0.6).toString().concat('px'),
      width: (window.innerWidth * 0.6).toString().concat('px'),
      maxWidth: (window.innerWidth - 100).toString().concat('vw'),
      panelClass: 'md-p-0'
    });
  }

}

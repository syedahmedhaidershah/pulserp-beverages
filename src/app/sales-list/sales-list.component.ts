import { Component, OnInit, Input } from '@angular/core';
import { SalesService } from '../sales.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MessagesService } from '../messages.service';
// import { OldSaleComponent } from '../old-sale/old-sale.component';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { DeparturesComponent } from '../departures/departures.component';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  safeStyle: SafeStyle;
  // @Input() parentName: string;

  fieldEnabled = false;
  salesList = [];
  schemesList = [];
  schemesLoaded = false;

  constructor(
    private salesServ: SalesService,
    private snackBar: MatSnackBar,
    private messages: MessagesService,
    // private schemes: SchemesService,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.messages.currentMessage.subscribe(res => {
      if (res === 'inventory') {
        this.retreiveSales();
      }
    });
    this.retreiveSales();
    // this.setArributes();
  }

  // setArributes() {
  //   if (this.parentName === 'dashboard') {
  //     this.safeStyle = this.sanitizer.bypassSecurityTrustStyle('height: 14rem!important;');
  //   } else if (this.parentName === 'reporting') {
  //     this.safeStyle = this.sanitizer.bypassSecurityTrustStyle('height: 29rem!important;');
  //   }
  // }

  retreiveSales() {
    this.schemesLoaded = false;
    this.salesServ.getAllSalesDetails().subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        this.salesList = res.message;
        this.schemesLoaded = true;
        // this.retreiveSchemes();
      }
    });
    // this.salesServ.getAllSalesDetails().subscribe(res => {
    //   console.log(res.message);
    // });
  }

  retreiveSchemes() {
    // this.schemes.getAllSchemes().subscribe(res => {
    //   this.schemesLoaded = true;
    //   if (res.error) {
    //     this.snackBar.open(res.message, 'close');
    //   } else {
    //     this.schemesList = res.message;
    //     this.salesList = this.salesList.filter(s => {
    //       let useArr = [];
    //       let disArr = s.discounts.split('_');
    //       disArr.splice(-1, 1);
    //       disArr.forEach(d => {
    //         if (useArr.indexOf(d) === -1) {
    //           useArr.push(d);
    //         }
    //       });
    //       s.appliedSchemes = this.schemesList.filter(sch => {

    //       });
    //     });
    //   }
    // });
  }

  Date(str) {
    return new Date(str).toLocaleString();
  }

  payOut(inv) {
    this.dialog.open(DeparturesComponent, {
      height: (window.innerHeight - 100).toString().concat('px'),
      width: (window.innerWidth - 100).toString().concat('px'),
      panelClass: 'md-p-0',
      maxWidth: '100vw',
      data: inv
    });
  }

  close(id) {
    ////// test
  }

  sendToPrinter(s) {
    // const n = window.open('');
  }

  getStatus(s) {
    let status = 1;
    s.data.forEach(sale => {
      if (sale.complete === 0) {
        status = 0;
      }
    });
    return status;
  }
}

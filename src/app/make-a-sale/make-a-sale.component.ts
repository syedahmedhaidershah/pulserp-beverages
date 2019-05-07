import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSelect, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesService } from '../sales.service';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { InquireQuantityComponent } from '../inquire-quantity/inquire-quantity.component';
import { QuickSalePrintComponent } from '../quick-sale-print/quick-sale-print.component';
import { CustomersService } from '../customers.service';
import { ItemsService } from '../items.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-make-a-sale',
  templateUrl: './make-a-sale.component.html',
  styleUrls: ['./make-a-sale.component.css']
})
export class MakeASaleComponent implements OnInit, AfterViewInit {
  @ViewChild('salesmanSelect') salesmanSelect: MatSelect;

  itemsCount = 0;

  salesForm: FormGroup;
  extraDetailsForm: FormGroup;

  salesmanList = [];
  selectedSalesman: any = undefined;
  emptyRemaining = -1;
  previousBalance = -1;

  itemsList = [];
  showItems = [];
  selectedItem: any = undefined;

  cartList = [];

  productsTotal = 0;
  totalBill = 0;

  alertAud: HTMLAudioElement = new Audio('../../assets/aud/alert.mp3');

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<MakeASaleComponent>,
    private salesman: CustomersService,
    private snackBar: MatSnackBar,
    private inv: ItemsService,
    private sales: SalesService,
    private messages: MessagesService,
    private detector: ChangeDetectorRef,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initForm();
    this.retreiveSalesman();
    this.retreiveItems();
    this.setListeners();
  }

  ngAfterViewInit() {
    this.detector.detectChanges();
  }

  setListeners() {
    // tslint:disable-next-line:no-string-literal
    const mtr = this.extraDetailsForm.controls['mtReturned'];
    // tslint:disable-next-line:no-string-literal
    const cr = this.extraDetailsForm.controls['cashReturned'];
    // tslint:disable-next-line:no-string-literal
    const md = this.extraDetailsForm.controls['mDiscount'];
    mtr.valueChanges.subscribe(data => {
      const useVal = parseInt(data, 10);
      if (useVal > this.emptyRemaining) {
        mtr.setValue(this.emptyRemaining);
        this.snackBar.open(`${this.selectedSalesman.name} has only ${this.emptyRemaining} MT in his/her account`, 'close');
        this.alertAud.load();
        this.alertAud.play();
      }
    });
    cr.valueChanges.subscribe(data => {
      const useVal = parseInt(data, 10);
      if (useVal > this.previousBalance && this.totalBill === 0) {
        cr.setValue(this.previousBalance);
        this.snackBar.open(`${this.selectedSalesman.name} has only ${this.previousBalance} balance pending`, 'close');
        this.alertAud.load();
        this.alertAud.play();
      }
    });
    md.valueChanges.subscribe(data => {
      const useVal = parseInt(data, 10);
      if (useVal > this.totalBill) {
        md.setValue(this.totalBill);
        this.snackBar.open(`Total discount provided cannot be greater than the total bill`, 'close');
        this.alertAud.load();
        this.alertAud.play();
      }
    });
  }

  initForm() {
    this.salesForm = this.fb.group({
      // quantity: ['0', Validators.required]
    });
    this.extraDetailsForm = this.fb.group({
      mtReturned: [0],
      cashReturned: [0],
      mDiscount: [0]
    });
  }

  retreiveItems() {
    this.inv.getAll.subscribe(data => {
      if (data.error) {
        this.snackBar.open(data.message, 'close');
      } else {
        this.itemsList = data.message;
        this.showItems = this.itemsList;
      }
    });
  }

  retreiveSalesman() {
    this.salesman.getAll().subscribe(data => {
      if (data.error) {
        this.snackBar.open(data.message, 'close');
      } else {
        this.salesmanList = data.message;
      }
    });
  }

  closeRef() {
    this.ref.close();
  }

  setSalesman() {
    const useVal = parseInt(this.salesmanSelect.value, 10);
    this.selectedSalesman = this.salesmanList.filter(s => {
      if (useVal === s.customer_id) {
        return s;
      }
    })[0];
    this.sales.getSalesEmptySpecific().subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        this.emptyRemaining = 0;
        res.message.forEach(e => {
          if (e.customer_id === this.selectedSalesman.customer_id) {
            this.emptyRemaining += e.quantity - e.returned;
          }
        });
      }
    });
    this.sales.getPrevBalance(this.selectedSalesman).subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        this.previousBalance = 0;
        res.message.forEach(r => {
          this.previousBalance += r.remaining;
        });
      }
    });
  }

  setItem(itemSelect: MatSelect) {
    const useVal = parseInt(itemSelect.value, 10);
    this.selectedItem = this.itemsList.filter(i => {
      if (useVal === i.item_id) {
        return i;
      }
    })[0];
  }

  inquireQuantity(item) {
    if (this.selectedSalesman === undefined) {
      this.snackBar.open('Please select a salesman/Customer', 'close');
      return false;
    }
    if (item.quantity === 0) {
      this.snackBar.open('Please restock '.concat(item.name).concat(' to continue'), 'close');
      return false;
    }
    const check = this.cartList.filter(c => {
      if (c.data.item_id === item.item_id) {
        return c;
      }
    });
    if (check.length > 0) {
      this.snackBar.open(item.name.concat(' is already on list'), 'close');
      return false;
    }
    const dr = this.dialog.open(InquireQuantityComponent, {
      height: '400px',
      width: '400px',
      panelClass: 'md-p-0',
      data: item
    });
    dr.afterClosed().subscribe(data => {
      if (data > 0) {
        this.cartList.push({
          data: item,
          onList: data
        });
        this.showItems.filter(i => {
          if (i.item_id === item.item_id) {
            i.quantity -= data;
          }
          return i;
        });
        this.productsTotal += (
          data * (
            item.selling -
            this.selectedSalesman['h'.concat(item.item_id.toString())] -
            item.cscheme
          )
        );
        this.totalBill = this.productsTotal + this.previousBalance;
        // tslint:disable-next-line:no-string-literal
        this.extraDetailsForm.controls['cashReturned'].setValue(this.totalBill);
      }
    });
  }

  // getSafeStyle() {
  //   let toRet = ' text-white cursor-pointer';
  //   switch (this.itemsCount % 5) {
  //     case 0:
  //       toRet = 'bg-success'.concat(toRet);
  //       break;
  //     case 1:
  //       toRet = 'bg-info'.concat(toRet);
  //       break;
  //     case 2:
  //       toRet = 'bg-secondary'.concat(toRet);
  //       break;
  //     case 3:
  //       toRet = 'bg-warning'.concat(toRet);
  //       break;
  //     case 4:
  //       toRet = 'bg-maroon'.concat(toRet);
  //       break;
  //     default:
  //       toRet = 'bg-success'.concat(toRet);
  //       break;
  //   }
  //   this.itemsCount++;
  //   return (toRet);
  // }

  remFromList(item) {
    let pushBack = 0;
    this.cartList = this.cartList.filter(i => {
      if (i.data.item_id !== item.data.item_id) {
        pushBack = item.onList;
        return i;
      } else {
        this.productsTotal -= (
          i.onList * (
            i.data.selling -
            this.selectedSalesman['h'.concat(item.data.item_id.toString())] -
            i.data.cscheme
          )
        );
        this.totalBill = this.productsTotal + this.previousBalance;
        // tslint:disable-next-line:no-string-literal
        this.extraDetailsForm.controls['cashReturned'].setValue(this.totalBill);
      }
    });
    this.showItems.filter(i => {
      if (i.item_id === item.data.item_id) {
        i.quantity += item.onList;
      }
      return i;
    });
  }

  makeASale(depart) {
    const useArr = [];
    this.itemsList.forEach(i => {
      useArr.push({
        data: i,
        onList: 0
      });
    });
    this.cartList.forEach(v => {
      useArr.forEach((x, i) => {
        if (x.data.item_id === v.data.item_id) {
          useArr.splice(i, 1);
          useArr.push(v);
        }
      });
    });

    // tslint:disable-next-line:no-string-literal
    const mtr = this.extraDetailsForm.controls['mtReturned'];
    // tslint:disable-next-line:no-string-literal
    const cr = this.extraDetailsForm.controls['cashReturned'];
    if (mtr.value === '' || mtr.value === null) {
      mtr.setValue(0);
    }
    if (cr.value === '' || cr.value === null) {
      cr.setValue(0);
    }

    let onlTotal = 0;

    useArr.forEach(i => {
      onlTotal += i.onList;
    });

    if (onlTotal === 0) {
      this.snackBar.open('Please add items to the cart', 'close');
      return false;
    }
    if (this.selectedSalesman === undefined) {
      this.snackBar.open('Please select a salesman/Customer', 'close');
      return false;
    }

    const forward = {
      data: useArr,
      prev: this.previousBalance,
      // tslint:disable-next-line:no-string-literal
      paid: parseInt(this.extraDetailsForm.controls['cashReturned'].value, 10),
      mt: this.emptyRemaining,
      // tslint:disable-next-line:no-string-literal
      mtr: parseInt(this.extraDetailsForm.controls['mtReturned'].value, 10),
      salesman: this.selectedSalesman,
      bill: this.totalBill,
      productsBill: this.productsTotal,
      // tslint:disable-next-line:no-string-literal
      mDiscount: parseInt(this.extraDetailsForm.controls['mDiscount'].value, 10)
    };

    this.sales.makeASale(forward).subscribe(res => {
      if (!(res.error)) {
        if (depart === 1) {
          this.snackBar.open('Your load has been departed.', 'close');
        } else {
          this.snackBar.open(res.message, 'close');
        }
      } else {
        this.snackBar.open(res.message, 'close');
      }

      this.messages.changeMessage('inventory');

      this.totalBill = 0;
      this.productsTotal = 0;
      this.setSalesman();
      this.cartList = [];
      this.extraDetailsForm.reset();

      if (depart === 0) {
        const ref = this.dialog.open(QuickSalePrintComponent, {
          height: (window.innerHeight).toString().concat('px'),
          width: (window.innerWidth).toString().concat('px'),
          maxWidth: (window.innerWidth).toString().concat('px'),
          panelClass: 'md-p-0',
          data: forward
        });
      }
    });
  }
}

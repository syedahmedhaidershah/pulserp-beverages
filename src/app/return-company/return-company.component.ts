import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../items.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MessagesService } from '../messages.service';
import { ReturnCompanyPromptComponent } from '../return-company-prompt/return-company-prompt.component';

@Component({
  selector: 'app-return-company',
  templateUrl: './return-company.component.html',
  styleUrls: ['./return-company.component.css']
})
export class ReturnCompanyComponent implements OnInit {
  tempSub: Subscription;

  inventoryStats = [
  ];

  delItemMessage = 'Are you sure you want to delete the Inventory item?';

  // tslint:disable-next-line:max-line-length
  constructor(
    private inventory: ItemsService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private messages: MessagesService
  ) { }

  initSubscribers() {
    this.messages.currentMessage.subscribe(message => {
      switch (message) {
        case 'inventory':
          this.retreiveInvItems();
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
    this.initSubscribers();
    this.retreiveInvItems();
  }

  retreiveInvItems() {
    this.tempSub = this.inventory.getAll.subscribe(data => {
      if (data.error) {
        this.matSnackBar.open(data.message, 'close');
      } else {
        this.inventoryStats = data.message;
      }
    });
  }

  capitalizeOnGaps(str: string) {
    const strArr = str.split(' ').map(e => {
      return e.substr(0, 1)
        .toUpperCase()
        .concat(
          e.substr(1) + ' '
        );
    });
    return strArr
      .toString()
      .replace(/,/g, ' ');
  }

  reStock(itemId) {
    const dialogRef = this.matDialog.open(ReturnCompanyPromptComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'md-p-0',
      data: parseInt(itemId, 10)
    });

    dialogRef.afterClosed().subscribe(res => {
      this.messages.changeMessage('inventory');
    });
  }
}

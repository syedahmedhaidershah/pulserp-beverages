import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../items.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { MessagesService } from '../messages.service';
import { ReStockItemComponent } from '../re-stock-item/re-stock-item.component';

@Component({
  selector: 'app-inv-management',
  templateUrl: './inv-management.component.html',
  styleUrls: ['./inv-management.component.css']
})
export class InvManagementComponent implements OnInit {
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

  // editInventoryItem(itemId) {
  //   const dialogRef = this.matDialog.open(EditInvItemComponent, {
  //     height: 'auto',
  //     width: '30%',
  //     data: {
  //       item_id: itemId
  //     },
  //     panelClass: 'md-p-0'
  //   });
  // }

  // deleteInventoryItem(itemId) {
  //   const dialogRef = this.matDialog.open(ProcessConfirmComponent, {
  //     height: 'auto',
  //     width: 'auto',
  //     data: {
  //       message: this.delItemMessage,
  //       options: [
  //         { label: 'Yes', icon: 'done' },
  //         { label: 'No', icon: 'clear' }
  //       ]
  //     }
  //   });

    // dialogRef.afterClosed().subscribe(res => {
    //   if (res === 'yes') {
    //     this.inventory.deleteItem({
    //       item_id: itemId
    //     }).subscribe(data => {
    //       if (!(data.error)) {
    //         this.retreiveInvItems();
    //       }
    //       this.matSnackBar.open(data.message, 'close');
    //     });
    //   }
    // });

  // }

  reStock(itemId) {
    const dialogRef = this.matDialog.open(ReStockItemComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        item_id: itemId
      },
      panelClass: 'md-p-0'
    });

    dialogRef.afterClosed().subscribe(res => {
      this.messages.changeMessage('inventory');
    });
  }
}

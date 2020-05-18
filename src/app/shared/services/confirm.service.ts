import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmData } from '../models/confirm-data';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private dialog: MatDialog) { }

  public confirm(data: ConfirmData = {}): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '380px',
      data,
      disableClose: true
    });

    return dialogRef.afterClosed();
  }
}

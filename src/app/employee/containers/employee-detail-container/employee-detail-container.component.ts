import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as  EmployeeActions from './../../state/actions/employee.actions';
import * as FromReducer from './../../state/reducers';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

interface DialogRef {
  employeeId: number;
}

@Component({
  selector: 'app-employee-detail-container',
  templateUrl: './employee-detail-container.component.html',
  styleUrls: ['./employee-detail-container.component.scss']
})
export class EmployeeDetailContainerComponent implements OnInit {

  employee$: Observable<Employee> = this.store.select(FromReducer.getEmployee);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogRef,
    private store: Store<FromReducer.EmployeeState>) { }

  ngOnInit(): void {
    this.store.dispatch(new EmployeeActions.GetEmployeeById(this.data.employeeId));
  }

}

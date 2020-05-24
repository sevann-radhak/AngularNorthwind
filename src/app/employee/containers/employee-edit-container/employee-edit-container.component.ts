import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../state/reducers';
import { Observable } from 'rxjs';
import * as EmployeeActions from './../../state/actions/employee.actions';
import { Employee } from './../../models/employee';

interface EmployeeEditData {
  employeeId: number;
}

@Component({
  selector: 'app-employee-edit-container',
  templateUrl: './employee-edit-container.component.html',
  styleUrls: ['./employee-edit-container.component.scss']
})
export class EmployeeEditContainerComponent implements OnInit {

  employee$: Observable<Employee> = this.store.select(fromReducer.getEmployee);

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: EmployeeEditData,
    private dialogRef: MatDialogRef<EmployeeEditContainerComponent>,
    private store: Store<fromReducer.EmployeeState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new EmployeeActions.GetEmployeeById(this.data.employeeId));
  }

  onEdit(employee: Employee) {
    this.store.dispatch(new EmployeeActions.UpdateEmployee(employee));
    this.dialogRef.close();
  }
}

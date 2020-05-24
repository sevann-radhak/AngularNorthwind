import { Component, OnInit, ViewChild, AfterViewInit, DoCheck } from '@angular/core';
import { Employee } from './../../models/employee';
import { Store } from '@ngrx/store';
import * as FromReducder from '../../state/reducers';
import * as EmployeeActions from '../../state/actions/employee.actions';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-new-container',
  templateUrl: './employee-new-container.component.html',
  styleUrls: ['./employee-new-container.component.scss']
})
export class EmployeeNewContainerComponent implements DoCheck, OnInit, AfterViewInit {

  @ViewChild(EmployeeFormComponent) child;

  employeeForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EmployeeNewContainerComponent>,
    private store: Store<FromReducder.EmployeeState>) { }

  ngDoCheck(): void {
    if (this.child && this.child.employeeForm) {
      this.employeeForm = this.child.employeeForm;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.employeeForm = this.child.employeeForm;
  }

  onAdd(employee: Employee): void {
    this.store.dispatch(new EmployeeActions.AddEmployee(employee));
    this.dialogRef.close();
  }
}

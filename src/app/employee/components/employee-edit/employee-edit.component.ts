import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from './../../models/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit, OnChanges {

  @Input()
  employee: Employee;
  @Output()
  edit: EventEmitter<Employee> = new EventEmitter<Employee>();

  employeeToSend: Employee;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employee && changes.employee.currentValue) {
      this.employeeToSendFunction();
    }
  }

  ngOnInit(): void {
  }

  employeeToSendFunction(): void {
    this.employeeToSend = this.employee;
  }

  onEdit(employee: Employee): void {
    this.edit.emit(employee);
  }
}

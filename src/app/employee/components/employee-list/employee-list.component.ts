import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input()
  employees: Employee[];

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  detail: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(employeeId: any) {
    this.delete.emit(employeeId);
  }

  onEdit(employeeId: any) {
    this.edit.emit(employeeId);
  }

  onViewDetails(event: any): void {
    this.detail.emit(event);
  }
}

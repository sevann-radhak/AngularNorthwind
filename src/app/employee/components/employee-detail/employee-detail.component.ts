import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee';
import { Constants } from './../../../constants/constans';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  ADDRESS = Constants.ADDRESS;
  COMPANY = Constants.COMPANY;
  EMAIL = Constants.EMAIL;
  FIRST_NAME = Constants.FIRST_NAME;
  JOB_TITLE = Constants.JOB_TITLE;
  LAST_NAME = Constants.LAST_NAME;
  PHONE_NUMBER = Constants.PHONE_NUMBER;

  @Input()
  employee: Employee;

  CONSTANTS: Constants;

  constructor() { }

  ngOnInit(): void {
  }

}

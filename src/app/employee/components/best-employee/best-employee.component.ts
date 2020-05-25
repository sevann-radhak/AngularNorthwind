import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BestEmployee } from '../../models/best-employee';
import { Constants } from '../../../constants/constans';

@Component({
  selector: 'app-best-employee',
  templateUrl: './best-employee.component.html',
  styleUrls: ['./best-employee.component.scss']
})
export class BestEmployeeComponent implements OnInit, OnChanges {

  @Input()
  bestEmployee: BestEmployee;

  BEST_EMPLOYEE: Constants;
  EMAIL: Constants;
  JOB_TITLE: Constants;
  TOTAL_SALES: Constants;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.bestEmployee && changes.bestEmployee.currentValue) {
      this.bestEmployee = changes.bestEmployee.currentValue;
    }
  }

  ngOnInit(): void {
    this.BEST_EMPLOYEE = Constants.BEST_EMPLOYEE;
    this.EMAIL = Constants.EMAIL;
    this.JOB_TITLE = Constants.JOB_TITLE;
    this.TOTAL_SALES = Constants.TOTAL_SALES;

    console.log(this.bestEmployee);

  }

}

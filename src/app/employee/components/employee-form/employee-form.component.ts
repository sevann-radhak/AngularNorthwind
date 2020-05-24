import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from './../../models/employee';
import { Constants } from './../../../constants/constans';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  ADDRESS = Constants.ADDRESS;
  ADDRESS_REQUIRED = Constants.ADDRESS_REQUIRED;
  CANCEL = Constants.CANCEL;
  COMPANY = Constants.COMPANY;
  COMPANY_REQUIRED = Constants.COMPANY_REQUIRED;
  EMAIL = Constants.EMAIL;
  EMAIL_REQUIRED = Constants.EMAIL_REQIRED;
  FIRST_NAME = Constants.FIRST_NAME;
  FIRST_NAME_REQUIRED = Constants.FIRST_NAME_REQUIRED;
  JOB_TITLE = Constants.JOB_TITLE;
  JOB_TITLE_REQUIRED = Constants.JOB_TITLE_REQUIRED;
  LAST_NAME = Constants.LAST_NAME;
  LAST_NAME_REQUIRED = Constants.LAST_NAME_REQUIRED;
  PHONE_NUMBER = Constants.PHONE_NUMBER;

  employee: Employee;
  employeeForm: FormGroup;
  submitButtonText: string;
  title: string;

  @Input()
  employeeEdit: Employee;
  @Output()
  submitForm: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employeeEdit && changes.employeeEdit.currentValue) {
      this.submitButtonText = Constants.SUBMIT_BUTTON_SAVE;
      this.title = `${Constants.EDIT_EMPLOYEE_TITLE}
        ${changes.employeeEdit.currentValue.first_name}
        ${changes.employeeEdit.currentValue.last_name}`;
      this.buildEmployeeEditForm();
    }
  }

  ngOnInit(): void {
    this.submitButtonText = Constants.SUBMIT_BUTTON_CREATE;
    this.title = Constants.ADD_EMPLOYEE_TITLE;
    this.buildEmployeeForm();
  }

  buildEmployeeEditForm(): void {
    console.log(this.employeeEdit);
    
    this.employeeForm = this.fb.group({
      id: [this.employeeEdit.id],
      address: [this.employeeEdit.address, [Validators.required]],
      bussinessPhone: [this.employeeEdit.bussinessPhone],
      company: [this.employeeEdit.company, [Validators.required]],
      emailAddress: [this.employeeEdit.emailAddress, [Validators.required]],
      faxNumber: [this.employeeEdit.faxNumber],
      firstName: [this.employeeEdit.firstName, [Validators.required]],
      homePhone: [this.employeeEdit.homePhone],
      jobTitle: [this.employeeEdit.jobTitle, [Validators.required]],
      lastName: [this.employeeEdit.lastName, [Validators.required]],
      mobilePhone: [this.employeeEdit.mobilePhone]
    });
  }

  buildEmployeeForm() {
    this.employeeForm = this.fb.group({
      address: ['', [Validators.required]],
      bussinessPhone: [''],
      company: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      faxNumber: [''],
      firstName: ['', [Validators.required]],
      homePhone: [''],
      jobTitle: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobilePhone: ['']
    });
  }

  onSubmit() {
    this.submitForm.emit({ ...this.employee, ...this.employeeForm.value });
  }
}

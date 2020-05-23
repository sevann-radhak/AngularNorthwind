import { Action } from '@ngrx/store';
import { GetEmployees } from '../../models/get-employees';
import { EmployeeList } from '../../models/employee-list';
import { Employee } from '../../models/employee';
import { BestEmployee } from '../../models/best-employee';

export enum EmployeeActionTypes {
    AddEmployee = '{Employee} Add Employee',
    AddEmployeeComplete = '{Employee} Add Employee complete',
    DeleteEmployeeById = '{Employee} Delete Employee by Id',
    DeleteEmployeeByIdComplete = '{Employee} Delete Employee by Id complete',
    GetBestEmployee = '{Employee} Get best Employee',
    GetBestEmployeeComplete = '{Employee} Get best Employee complete',
    GetEmployeeById = '{Employee} Get Employee by Id',
    GetEmployeeByIdComplete = '{Employee} Get Employee by Id complete',
    LoadEmployees = '{Employee} Load Employees',
    LoadEmployeesComplete = '{Employee} Load Employees complete',
    UpdateEmployee = '{Employee} Update Employee',
    UpdateEmployeeComplete = '{Employee} Update Employee complete'
}

export class AddEmployee implements Action {
    readonly type = EmployeeActionTypes.AddEmployee;

    constructor(public request: Employee) { }
}

export class AddEmployeeComplete implements Action {
    readonly type = EmployeeActionTypes.AddEmployeeComplete;

    constructor(public payload: Employee) { }
}

export class DeleteEmployeeById implements Action {
    readonly type = EmployeeActionTypes.DeleteEmployeeById;

    constructor(public request: number) { }
}

export class DeleteEmployeeByIdComplete implements Action {
    readonly type = EmployeeActionTypes.DeleteEmployeeByIdComplete;

    constructor(public payload: Employee) { }
}

export class GetBestEmployee implements Action {
    readonly type = EmployeeActionTypes.GetBestEmployee;

    constructor() { }
}

export class GetBestEmployeeComplete implements Action {
    readonly type = EmployeeActionTypes.GetBestEmployeeComplete;

    constructor(public payload: BestEmployee) { }
}

export class GetEmployeeById implements Action {
    readonly type = EmployeeActionTypes.GetEmployeeById;

    constructor(public EmployeeId: number) { }
}

export class GetEmployeeByIdComplete implements Action {
    readonly type = EmployeeActionTypes.GetEmployeeByIdComplete;

    constructor(public payload: Employee) { }
}

export class LoadEmployees implements Action {
    readonly type = EmployeeActionTypes.LoadEmployees;

    constructor(public request: GetEmployees) { }
}

export class LoadEmployeesComplete implements Action {
    readonly type = EmployeeActionTypes.LoadEmployeesComplete;

    constructor(public payload: EmployeeList) { }
}

export class UpdateEmployee implements Action {
    readonly type = EmployeeActionTypes.UpdateEmployee;

    constructor(public request: Employee) { }
}

export class UpdateEmployeeComplete implements Action {
    readonly type = EmployeeActionTypes.UpdateEmployeeComplete;

    constructor(public payload: Employee) { }
}

export type Actions =
    AddEmployee
    | AddEmployeeComplete
    | DeleteEmployeeById
    | DeleteEmployeeByIdComplete
    | GetBestEmployee
    | GetBestEmployeeComplete
    | GetEmployeeById
    | GetEmployeeByIdComplete
    | LoadEmployees
    | LoadEmployeesComplete
    | UpdateEmployee
    | UpdateEmployeeComplete;

import { Injectable } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as EmployeeActions from './../actions/employee.actions';
import { switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService,
        private router: Router) { }

    @Effect()
    addEmployee$ = this.actions$.pipe(
        ofType<EmployeeActions.AddEmployee>(EmployeeActions.EmployeeActionTypes.AddEmployee),
        switchMap(action => this.employeeService.addEmployee(action.request)
            .pipe(map(data => {
                // this.router.navigate(['/employees/list']);
                return new EmployeeActions.AddEmployeeComplete(data);
            }))
        )
    );

    @Effect()
    deleteEmployee$ = this.actions$.pipe(
        ofType<EmployeeActions.DeleteEmployeeById>(EmployeeActions.EmployeeActionTypes.DeleteEmployeeById),
        switchMap(action => this.employeeService.deleteEmployee(action.request)
            .pipe(map(data => new EmployeeActions.DeleteEmployeeByIdComplete(data)))
        )
    );

    @Effect()
    getBestEmployee$ = this.actions$.pipe(
        ofType<EmployeeActions.GetBestEmployee>(EmployeeActions.EmployeeActionTypes.GetBestEmployee),
        switchMap(action => this.employeeService.getBestEmployee()
            .pipe(map(data => new EmployeeActions.GetBestEmployee()))
        )
    );

    @Effect()
    getEmployees$ = this.actions$.pipe(
        ofType<EmployeeActions.LoadEmployees>(EmployeeActions.EmployeeActionTypes.LoadEmployees),
        switchMap(action => this.employeeService.getEmployees(action.request)
            .pipe(map(data => new EmployeeActions.LoadEmployeesComplete(data)))
        )
    );

    @Effect()
    getEmployeeById$ = this.actions$.pipe(
        ofType<EmployeeActions.GetEmployeeById>(EmployeeActions.EmployeeActionTypes.GetEmployeeById),
        switchMap(action => this.employeeService.getEmployeeById(action.EmployeeId)
            .pipe(map(data => new EmployeeActions.GetEmployeeByIdComplete(data)))
        )
    );

    @Effect()
    updateEmployee$ = this.actions$.pipe(
        ofType<EmployeeActions.UpdateEmployee>(EmployeeActions.EmployeeActionTypes.UpdateEmployee),
        switchMap(action => this.employeeService.updateEmployee(action.request)
            .pipe(map(data => {
                // this.router.navigate(['/employees/list']);
                return new EmployeeActions.UpdateEmployeeComplete(data);
            }))
        )
    );
}

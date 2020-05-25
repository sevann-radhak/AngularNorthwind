import { Employee } from '../../models/employee';
import * as EmployeeActions from '../actions/employee.actions';
import { BestEmployee } from '../../models/best-employee';

export interface State {
    bestEmployee: BestEmployee;
    employee: Employee;
    employees: Employee[];
    totalRecords: number;
}

const initialState: State = {
    bestEmployee: new BestEmployee(),
    employee: new Employee(),
    employees: [],
    totalRecords: 0
};

export function EmployeeReducer(state = initialState, action: EmployeeActions.Actions): State {
    switch (action.type) {
        case EmployeeActions.EmployeeActionTypes.AddEmployee:
            return state;
        case EmployeeActions.EmployeeActionTypes.AddEmployeeComplete:
            return {
                ...state,
                employee: action.payload
            };

        case EmployeeActions.EmployeeActionTypes.DeleteEmployeeById:
            return state;
        case EmployeeActions.EmployeeActionTypes.DeleteEmployeeByIdComplete:
            return {
                ...state,
                employee: action.payload
            };

        case EmployeeActions.EmployeeActionTypes.GetBestEmployee:
            return state;
        case EmployeeActions.EmployeeActionTypes.GetBestEmployeeComplete:
            return {
                ...state,
                bestEmployee: action.payload
            };

        case EmployeeActions.EmployeeActionTypes.GetEmployeeById:
            return state;
        case EmployeeActions.EmployeeActionTypes.GetEmployeeByIdComplete:
            return {
                ...state,
                employee: action.payload
            };

        case EmployeeActions.EmployeeActionTypes.LoadEmployees:
            return state;
        case EmployeeActions.EmployeeActionTypes.LoadEmployeesComplete:
            return {
                ...state,
                employees: action.payload.data,
                totalRecords: action.payload.total_records
            };

        case EmployeeActions.EmployeeActionTypes.UpdateEmployee:
            return state;
        case EmployeeActions.EmployeeActionTypes.UpdateEmployeeComplete:
            console.log(action.payload);

            return {
                ...state,
                employee: action.payload
            };

        default:
            return state;
    }
}

export const addEmployee = (state: State) => state.employee;
export const deleteEmployee = (state: State) => state.employee;
export const getBestEmployee = (state: State) => state.bestEmployee;
export const getEmployee = (state: State) => state.employee;
export const getEmployees = (state: State) => state.employees;
export const getTotalRecords = (state: State) => state.totalRecords;
export const updateEmployee = (state: State) => state.employee;

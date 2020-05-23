import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetEmployees } from '../models/get-employees';
import { Observable } from 'rxjs';
import { EmployeeList } from '../models/employee-list';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { BestEmployee } from '../models/best-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  addEmployee(request: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${environment.ApiUrl}employees`, request);
  }

  deleteEmployee(request: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${environment.ApiUrl}employees/${request}`);
  }

  getBestEmployee(): Observable<BestEmployee> {
    return this.httpClient.get<BestEmployee>(`${environment.ApiUrl}products/bestselling`);
  }

  getEmployeeById(request: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${environment.ApiUrl}employees/${request}`);
  }

  getEmployees(request: GetEmployees): Observable<EmployeeList> {
    return this.httpClient.post<EmployeeList>(`${environment.ApiUrl}employees/paginated`, request);
  }

  updateEmployee(request: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${environment.ApiUrl}employees`, request);
  }
}

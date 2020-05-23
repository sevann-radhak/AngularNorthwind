import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

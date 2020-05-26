import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmService } from './services/confirm.service';
import { DecimalOnlyDirective } from './directives/decimal-only.directive';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableViewComponent } from './components/table-view/table-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ConfirmComponent, DecimalOnlyDirective, NavBarComponent, TableViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    HighchartsChartModule,
    MaterialModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ConfirmComponent,
    DecimalOnlyDirective,
    FormsModule,
    HighchartsChartModule,
    MaterialModule,
    NavBarComponent,
    ReactiveFormsModule,
    TableViewComponent
  ],
  entryComponents: [ConfirmComponent],
  providers: [ConfirmService]
})

export class SharedModule { }

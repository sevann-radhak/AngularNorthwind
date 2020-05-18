import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmService } from './services/confirm.service';

@NgModule({
  declarations: [ConfirmComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ConfirmComponent,
    FormsModule,
    MaterialModule,
    NavBarComponent,
    ReactiveFormsModule
  ],
  entryComponents: [ConfirmComponent],
  providers: [ConfirmService]
})

export class SharedModule { }

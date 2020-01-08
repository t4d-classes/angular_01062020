import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormHomeComponent } from './components/form-home/form-home.component';


@NgModule({
  declarations: [FormHomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  // declaration export
  exports: [FormHomeComponent]
})
export class FormDemoModule { }

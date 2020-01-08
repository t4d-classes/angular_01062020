import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormHomeComponent } from './components/form-home/form-home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [FormHomeComponent, ContactFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  // declaration export
  exports: [FormHomeComponent, ContactFormComponent]
})
export class FormDemoModule { }

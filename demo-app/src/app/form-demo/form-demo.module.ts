import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormHomeComponent } from './components/form-home/form-home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FullNameComponent } from './components/full-name/full-name.component';
import { TypeaheadDemoComponent } from './components/typeahead-demo/typeahead-demo.component';


@NgModule({
  declarations: [FormHomeComponent, ContactFormComponent, FullNameComponent, TypeaheadDemoComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule
  ],
  // declaration export
  exports: [FormHomeComponent, ContactFormComponent, TypeaheadDemoComponent]
})
export class FormDemoModule { }

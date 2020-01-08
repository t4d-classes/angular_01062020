import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';


const isEmpty = (fc: AbstractControl) => {
  return fc.value == null || String(fc.value).length === 0;
}

const emailOrPhoneValidator = (fg: FormGroup) => {

  if (isEmpty(fg.get('emailAddress')) && isEmpty(fg.get('phoneNumber'))) {
    return {
      emailOrPhone: true
    };
  }

  return null;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.fb.group({
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
    }, { validators: [ emailOrPhoneValidator ] });

  }

  displayFormContents() {
    console.log(this.contactForm.value);
  }

  get errorMessages() {

    if (!this.contactForm.errors) {
      return [];
    } 

    return Object.keys(this.contactForm.errors);
  }

}

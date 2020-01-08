import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  message: FormControl;

  age: FormControl;

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.message = new FormControl('', {
      validators: [ Validators.required ],
    });

    this.age = new FormControl(0);

    this.myForm = new FormGroup({
      message: this.message,
      age: this.age,
      isCustomer: new FormControl(false),
    });


  }

  get messageInvalid() {
    return this.message.invalid && this.message.touched;
  }

}

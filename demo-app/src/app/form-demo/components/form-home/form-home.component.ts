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

  starRatings = [
    { id: 1, text: 'five', value: '5' },
    { id: 2, text: 'four', value: '4' },
    { id: 3, text: 'three', value: '3' },
    { id: 4, text: 'two', value: '2' },
    { id: 5, text: 'first', value: '1' },
  ];

  days = [
    { id: 1, label: 'Sunday', value: '5UN' },
    { id: 2, label: 'Monday', value: 'MON' },
    { id: 3, label: 'Tuesday', value: 'TUE' },
    { id: 4, label: 'Wednesday', value: 'WED' },
    { id: 5, label: 'Thursday', value: 'THU' },
    { id: 6, label: 'Friday', value: 'FRI' },
    { id: 7, label: 'Saturday', value: 'SAT' },
  ];


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
      rating: new FormControl('5'),
      dayOfTheWeek: new FormControl('WED'),
      comments: new FormControl('comments'),
    });
  }

  get messageInvalid() {
    return this.message.invalid && this.message.touched;
  }

}

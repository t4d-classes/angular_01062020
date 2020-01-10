import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Car } from '../../models/car';

const colorAsyncValidator = (httpClient: HttpClient) => (fc: FormControl) => {

  return new Promise(resolve => {

    httpClient
      .get<object[]>('http://localhost:4250/colors?name_like=' + fc.value)
      .toPromise()
      .then(colors => {
        if (colors.length === 1) {
          resolve(null);
        } else {
          resolve({
            color: true,
          });
        }
      });

  });

};

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<Car>();

  carForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {

    this.carForm = this.formBuilder.group({
      make: '',
      model: '',
      year: 1900,
      color: [ '', { asyncValidators: [ colorAsyncValidator(this.httpClient) ] } ],
      price: 0,
    });
  }

  doSubmitCar() {

    this.submitCar.emit({
      ...this.carForm.value,
    });

    this.carForm.reset();
  }
}

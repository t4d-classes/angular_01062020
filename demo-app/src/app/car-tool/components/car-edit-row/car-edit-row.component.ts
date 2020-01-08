import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Car } from '../../models/car';

const minNumberValidator = (minNumber: number) => {
  return (formControl: FormControl) => {
    if (Number(formControl.value) < minNumber) {
      return {
        minNumber: true,
      };
    }
    return null;
  };
};

@Component({
  selector: '.app-car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css']
})
export class CarEditRowComponent implements OnInit {

  @Input()
  car: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  @Output()
  msg = new EventEmitter<string>();

  editCarForm: FormGroup;

  colorItems = [
    { value: 'red', caption: 'Red' },
    { value: 'blue', caption: 'Blue' },
    { value: 'green', caption: 'Green' },
    { value: 'yellow', caption: 'Yellow' },
    { value: 'saffron', caption: 'Saffron' },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editCarForm = this.formBuilder.group({
      make: this.car.make,
      model: this.car.model,
      year: [ this.car.year, { validators: [ minNumberValidator(1885) ] } ],
      color: this.car.color,
      price: [ this.car.price, { validators: Validators.min(0) } ],
      archived: this.car.archived,
    });
  }

  doSaveCar() {

    if (this.editCarForm.valid) {
      this.saveCar.emit({
        ...this.editCarForm.value,
        id: this.car.id,
      });
      this.msg.emit('');
    } else {
      this.msg.emit('Form is invalid');
    }

  }

  doCancelCar() {
    this.cancelCar.emit();
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 40000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2016, color: 'red', price: 100000 },
  ];

  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.carForm = this.formBuilder.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  addCar() {

    this.cars = this.cars.concat({
      ...this.carForm.value,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });

    this.carForm.reset();

  }

}

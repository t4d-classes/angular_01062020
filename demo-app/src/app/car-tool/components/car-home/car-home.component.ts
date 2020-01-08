import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 40000, archived: false },
    { id: 2, make: 'Tesla', model: 'S', year: 2016, color: 'red', price: 100000, archived: false },
  ];

  editCarId = -1;

  constructor() { }

  ngOnInit() {
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doAddCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    const newCars = this.cars.concat();
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doArchiveCar(carId: number) {
    const newCars = this.cars.concat();
    const carIndex = newCars.findIndex(c => c.id === carId);

    // mutating the original car object - avoid this
    // newCars[carIndex].archived = true;

    // creates a copy, and update the copy then replace the original
    // in the array
    const carToArchive = {
      ...newCars[carIndex],
      archived: true,
    } as Car;
    newCars[carIndex] = carToArchive;


    this.cars = newCars;
    this.editCarId = -1;
  }

}

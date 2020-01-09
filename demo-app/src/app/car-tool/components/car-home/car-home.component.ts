import { Component, OnInit, Inject } from '@angular/core';

import { Car } from '../../models/car';
import { ICarsService, CarsService, carsServiceToken } from '../../services/cars.service';


@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
  providers: [ { provide: carsServiceToken, useClass: CarsService } ],
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';
  editCarId = -1;
  cars: Car[] = [];

  constructor(@Inject(carsServiceToken) private carsSvc: ICarsService) { }

  ngOnInit() {
    this.carsSvc.allCars()
      .then(cars => this.cars = cars);
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doAddCar(car: Car) {
    this.carsSvc.appendCar(car)
      .then(() => this.carsSvc.allCars())
      .then(cars => this.cars = cars);

    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.carsSvc.removeCar(carId)
      .then(() => this.carsSvc.allCars())
      .then(cars => this.cars = cars);

    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    this.carsSvc.replaceCar(car)
      .then(() => this.carsSvc.allCars())
      .then(cars => this.cars = cars);

    this.editCarId = -1;
  }

  doArchiveCar(carId: number) {
    this.carsSvc.archiveCar(carId)
      .then(() => this.carsSvc.allCars())
      .then(cars => this.cars = cars);
    this.editCarId = -1;
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  errorMessage = '';

  constructor(@Inject(carsServiceToken) private carsSvc: ICarsService) { }

  ngOnInit() {
    this.doRefreshCars();
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doRefreshCars(o: Observable<any> = null) {

    this.errorMessage = '';

    if (o === null) {
      o = of({});
    }

    o.pipe(
      switchMap(() => this.carsSvc.allCars())
    )
    .subscribe({
      next: cars => this.cars = cars,
      error: err => {
        console.log(err);
        this.errorMessage = err.message;
      },
      complete: () => console.log('refresh complete'),
    });
  }

  doAddCar(car: Car) {
    this.doRefreshCars(this.carsSvc.appendCar(car));

    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.doRefreshCars(this.carsSvc.removeCar(carId));

    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    this.doRefreshCars(this.carsSvc.replaceCar(car));

    this.editCarId = -1;
  }

  doArchiveCar(carId: number) {
    this.doRefreshCars(this.carsSvc.archiveCar(carId));

    this.editCarId = -1;
  }

}

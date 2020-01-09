import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/car';
import { ApiUrlService } from './api-url.service';

export const carsServiceToken = new InjectionToken('Cars Service Token');

export interface ICarsService {
  allCars(): Promise<Car[]>;
  appendCar(car: Car): Promise<Car>;
  replaceCar(car: Car): Promise<Car>;
  removeCar(carId: number): Promise<void>;
  archiveCar(carId: number): Promise<Car>;
}

@Injectable({
  providedIn: 'root',
})
export class CarsService implements ICarsService {

  constructor(
    private httpClient: HttpClient,
    private carsApiUrl: ApiUrlService,
  ) { }

  allCars() {
    return this.httpClient
      .get<Car[]>(this.carsApiUrl.url)
      .toPromise();
  }

  appendCar(car: Car) {
    return this.httpClient
      .post<Car>(this.carsApiUrl.url, car)
      .toPromise();
  }

  removeCar(carId: number) {
    return this.httpClient
      .delete<void>(this.carsApiUrl.url + '/' + carId)
      .toPromise();
  }

  replaceCar(car: Car) {
    return this.httpClient
      .put<Car>(this.carsApiUrl.url + '/' + car.id, car)
      .toPromise();
  }

  archiveCar(carId: number) {
    return this.httpClient
      .patch<Car>(this.carsApiUrl.url + '/' + carId, { archived: true })
      .toPromise();
  }




}

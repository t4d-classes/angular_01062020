import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Car } from '../models/car';
import { ApiUrlService } from './api-url.service';

export const carsServiceToken = new InjectionToken('Cars Service Token');

export interface ICarsService {
  allCars(): Observable<Car[]>;
  appendCar(car: Car): Observable<Car>;
  replaceCar(car: Car): Observable<Car>;
  removeCar(carId: number): Observable<void>;
  archiveCar(carId: number): Observable<Car>;
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
      .get<Car[]>(this.carsApiUrl.url);
  }

  appendCar(car: Car) {
    return this.httpClient
      .post<Car>(this.carsApiUrl.url, car);
  }

  removeCar(carId: number) {
    return this.httpClient
      .delete<void>(this.carsApiUrl.url + '/' + carId);
  }

  replaceCar(car: Car) {
    return this.httpClient
      .put<Car>(this.carsApiUrl.url + '/' + car.id, car);
  }

  archiveCar(carId: number) {
    return this.httpClient
      .patch<Car>(this.carsApiUrl.url + '/' + carId, { archived: true });
  }




}

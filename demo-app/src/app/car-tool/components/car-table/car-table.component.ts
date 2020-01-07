import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars: Car[] = [];

  @Input()
  editCarId = -1;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doEditCar(carId: number) {
    this.editCar.emit(carId);
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

}

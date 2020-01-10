import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  showArchived = new FormControl(false);

  @Input()
  cars: Car[] = [];

  @Input()
  editCarId = -1;

  @Input()
  errorMessage = '';

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  archiveCar = new EventEmitter<number>();

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  msg = '';

  constructor() { }

  ngOnInit() {
  }

  doEditCar(carId: number) {
    this.editCar.emit(carId);
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

  doSaveCar(car: Car) {
    this.saveCar.emit(car);
  }

  doCancelCar() {
    this.cancelCar.emit();
  }

  showView(car: Car) {
    return (car.id !== this.editCarId) && (this.showArchived.value || !car.archived);
  }

  showEdit(car: Car) {
    return (car.id === this.editCarId) && (this.showArchived.value || !car.archived);
  }

  handleMsg(msg: string) {
    this.msg = msg;
  }
}

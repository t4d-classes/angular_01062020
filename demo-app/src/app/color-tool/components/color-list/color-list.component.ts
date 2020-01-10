import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges,
} from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit, OnChanges {

  @Input()
  colors: Color[] = [];

  @Output()
  deleteColor = new EventEmitter<number>();

  colorsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initializeColorsForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.colors.previousValue !== changes.colors.currentValue) {
      this.initializeColorsForm();
    }
  }

  initializeColorsForm() {
    this.colorsForm = new FormGroup({
      colors: new FormArray(this.colors.map(
        color => new FormGroup({
          id: new FormControl(color.id),
          name: new FormControl(color.name, {
            validators: [ Validators.required ]
          }),
        }),
      )),
    });
  }

  doDeleteColor(colorId: number) {
    this.deleteColor.emit(colorId);
  }

  colorTrackBy(color: Color) {
    return color.id + ':' + color.name;
  }

  doShowFormValue() {
    console.log(this.colorsForm.valid);
    console.log(this.colorsForm.value);
  }
}

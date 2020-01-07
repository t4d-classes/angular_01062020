import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input()
  colors: Color[] = [];

  @Output()
  deleteColor = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doDeleteColor(colorId: number) {
    this.deleteColor.emit(colorId);
  }


}

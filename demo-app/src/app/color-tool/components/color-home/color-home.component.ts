import { Component, OnInit } from '@angular/core';

import { Color } from '../../models/color';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';

  colors: Color[] = [];

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit() {
    this.colors = this.colorsSvc.all();
  }

  doAddColor(color: Color) {

    this.colors = this.colors.concat({
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    });

  }

  doDeleteColor(colorId: number) {
    this.colors = this.colors.filter(c => c.id !== colorId);
  }

}

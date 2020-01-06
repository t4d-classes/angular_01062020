import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';

  colors: Color[] = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'gray' },
    { id: 4, name: 'purple' },
  ];

  colorForm: FormGroup;

  // private formBuilder: FormBuilder;

  // constructor(formBuilder: FormBuilder) {
  //   this.formBuilder = formBuilder;
  // }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.colorForm = this.formBuilder.group({
      colorName: '',
      // add additional form fields here...
    });
  }

  addColor() {

    this.colors = this.colors.concat({
      name: this.colorForm.value.colorName,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    });

    this.colorForm.reset();

  }

}

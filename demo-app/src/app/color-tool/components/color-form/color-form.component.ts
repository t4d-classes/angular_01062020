import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = '';

  @Output()
  submitColor = new EventEmitter<Color>();

  colorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.colorForm = this.formBuilder.group({
      colorName: '',
      // add additional form fields here...
    });
  }

  doSubmitColor() {

    this.submitColor.emit({
      name: this.colorForm.value.colorName,
    });

    this.colorForm.reset();
  }


}

import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => FullNameComponent) },
  ]
})
export class FullNameComponent implements OnInit, ControlValueAccessor {


  firstName = new FormControl('');
  lastName = new FormControl('');

  private _onChange: (fullName: string) => void;
  private _onTouched: () => void;

  constructor() { }

  ngOnInit() {
  }

  writeValue(fullName: string) {
    const nameParts = fullName.split(' ');
    this.firstName.setValue(nameParts[0]);
    this.lastName.setValue(nameParts[1]);
  }

  registerOnChange(fn: (fullName: string) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    if (isDisabled) {
      this.firstName.disable();
      this.lastName.disable();
    } else {
      this.firstName.enable();
      this.lastName.enable();
    }
  } 

  doInput() {
    this._onChange(this.firstName.value + ' ' + this.lastName.value);
  }

  doBlur() {
    this._onTouched();
  }

}

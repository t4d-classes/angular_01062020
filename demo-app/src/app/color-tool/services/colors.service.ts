import { Injectable } from '@angular/core';

import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private colors: Color[] = [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' }
  ];

  constructor() { }

  all() {
    return this.colors;
  }
}

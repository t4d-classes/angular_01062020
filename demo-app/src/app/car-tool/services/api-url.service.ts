import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: { url: 'http://localhost:4250/cars' }
})
export class ApiUrlService {

  constructor() { }

  url: string;
}

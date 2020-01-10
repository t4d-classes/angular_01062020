import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';

interface ColorResult {
  id: number;
  name: string;
}

@Component({
  selector: 'app-typeahead-demo',
  templateUrl: './typeahead-demo.component.html',
  styleUrls: ['./typeahead-demo.component.css']
})
export class TypeaheadDemoComponent implements OnInit {

  colorFormControl = new FormControl('');

  colorNameInput$ = new BehaviorSubject<string[]>([]);
  
  colors$ = this.colorNameInput$.pipe(
    debounceTime(500),
    switchMap(colorName => this.httpClient.get<ColorResult[]>('http://localhost:4250/colors?name_like=' + colorName)),
    map(colorResults => colorResults.map(colorResult => colorResult.name)),
  );

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  doSearchColor() {
    this.colorNameInput$.next(this.colorFormControl.value);
  }

}

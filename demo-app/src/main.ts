// import { interval } from 'rxjs';
// import { map, filter, take, skip } from 'rxjs/operators';


// const ops = [
//   filter( (x: number) => x % 2 === 0),
//   map( (x: number) => x * 2),
//   skip(5),
// ];

// interval(500) // [ 1, 2, 3, 4,]
//   .pipe(...ops as [])
//   .subscribe(num => {
//   console.log(num);
// });

// interval(500).filter(x => x % 2 === 0).map(x => x * 2).subscribe(x => console.log(x));

// console.log('starting demo');

// let promiseCounter = 0;
// let observableCounter = 0;

// const p = new Promise(resolve => {

//   console.log('calling function passed to promise');

//   promiseCounter++;

//   resolve('a:' + promiseCounter);

// });

// p.then(result => {
//   console.log(result);
// });
// p.then(result => {
//   console.log(result);
// });


// const o: Observable<string> = Observable.create( (observer: Observer<string>) => {

//   console.log('calling function passed to observable');

//   const myCounter =  ++observableCounter;

//   let intervalCounter = 0;

//   const handle = setInterval(() => {

//     // if (observer.closed) {
//     //   clearInterval(handle);
//     //   return;
//     // }

//     if (intervalCounter > 5) {
//       clearInterval(handle);
//       observer.complete();
//       return;
//     }

//     console.log('interval generated new data');
//     intervalCounter++;
//     observer.next('b:' + myCounter + ':' + intervalCounter);
//   }, 1000);


// });

// const s: Subscription  = o.subscribe(result => {
//   console.log(result);
// }, null, () => {
//   console.log('all done');
// });

// setTimeout(() => {

//   s.unsubscribe();

// }, 5000);

// console.log('ending demo');


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

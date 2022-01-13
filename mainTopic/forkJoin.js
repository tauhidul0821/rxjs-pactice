import { interval, forkJoin, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const myPromise = val =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );
const example = forkJoin({
  //emit 'Hello' immediately
  sourceOne: of('Hello'),
  //emit 'World' after 1 second
  sourceTwo: of('World').pipe(delay(1000)),
  //emit 0 after 1 second
  sourceThree: interval(1000).pipe(take(1)),
  //emit 0...1 in 1 second interval
  sourceFour: interval(1000).pipe(take(2)),
  //promise that resolves to 'Promise Resolved' after 5 seconds
  sourceFive: myPromise('RESULT')
}).subscribe(val => console.log(val));

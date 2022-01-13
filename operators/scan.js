// import { of } from "rxjs";
// import { scan } from "rxjs/operators";

// const source = of(1, 2, 3);
// // basic scan example, sum over time starting with zero 
// const example = source.pipe(
//     scan((acc, curr) => acc + curr, 0)
// ).subscribe(val => console.log(val))



// import { timer } from 'rxjs';
// import { startWith, map, tap } from 'rxjs/operators';

// timer(1000)
//     .pipe(
//         map(() => ' emit'),
//         startWith('timer start')
//     )
//     .subscribe(x => console.log(x));












// import { of } from 'rxjs';
// import { startWith } from 'rxjs/operators';

// //emit (1,2,3)
// const source = of(1, 2, 3);
// //start with -1,0
// const example = source.pipe(startWith(-1,0));
// //output: -6,-1,1,2,3
// const subscribe = example.subscribe(val => console.log(val));


// // RxJS v6+
// import { startWith, scan } from 'rxjs/operators';
// import { of } from 'rxjs';

// //emit ('World!', 'Goodbye', 'World!')
// const source = of('World!', 'Goodbye', 'World!');
// //start with 'Hello', concat current string to previous
// const example = source.pipe(
//   startWith('Hello'),
//   scan((acc, curr) => `${acc} ${curr}`)
// );
// /*
//   output:
//   "Hello"
//   "Hello World!"
//   "Hello World! Goodbye"
//   "Hello World! Goodbye World!"
// */
// const subscribe = example.subscribe(val => console.log(val));


// import { from } from 'rxjs';
// import { distinctUntilChanged } from 'rxjs/operators';

// // only output distinct values, based on the last emitted value
// const source$ = from([1, 1, 2, 2, 3, 3]);

// source$
//   .pipe(distinctUntilChanged())
//   // output: 1,2,3
//   .subscribe(console.log);




import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const sampleObject = { name: 'Test' };
const sampleObject2 = { name: 'Joe' };
const sampleObject3 = { name: 'Joe' };
const sampleObject4 = { name: 'Sue' };

//Objects must be same reference
const source$ = from([sampleObject, sampleObject2, sampleObject3, sampleObject4]);

source$
    // custom compare for name

    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
    // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
    .subscribe(console.log);



    






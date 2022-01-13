// import { interval } from 'rxjs';
// import { share, map, take } from 'rxjs/operators';
// const source = interval(1000)
//     .pipe(
//         take(3),
//         map((x) => {
//             console.log('-----print-----:', x);
//             return x * x;
//         }),
//         share()
//     );
// source.subscribe(x => console.log('subscription 1: ', x));
// source.subscribe(x => console.log('subscription 2: ', x));
// source.subscribe(x => console.log('subscription 3: ', x));
// source.subscribe(x => console.log('subscription 4: ', x));


import { timer } from "rxjs";
import { tap, mapTo, share } from "rxjs/operators";
// emit value in 1s
const source = timer(1000);
// log side efect , emit result 
const example = source.pipe(
    tap(() => console.log('***SIDE EFFECT***')),
    mapTo('Result')
);
// NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE
const sub1 = example.subscribe(val => console.log(val))
const sub2 = example.subscribe(val => console.log(val))
// SHARED, SIDE EFFECT EXECUTED ONCE***
const shareExample = example.pipe(share())

const sub3 = shareExample.subscribe(val => console.log('share: ', val))
const sub4 = shareExample.subscribe(val => console.log('share: ', val))

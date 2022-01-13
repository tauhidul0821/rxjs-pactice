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


// import { timer } from "rxjs";
// import { tap, mapTo, share } from "rxjs/operators";
// // emit value in 1s
// const source = timer(1000);
// // log side efect , emit result 
// const example = source.pipe(
//     tap(() => console.log('***SIDE EFFECT***')),
//     mapTo('Result')
// );
// // NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE
// const sub1 = example.subscribe(val => console.log(val))
// const sub2 = example.subscribe(val => console.log(val))
// // SHARED, SIDE EFFECT EXECUTED ONCE***
// const shareExample = example.pipe(share())

// const sub3 = shareExample.subscribe(val => console.log('share: ', val))
// const sub4 = shareExample.subscribe(val => console.log('share: ', val))


/*
import { interval } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';

const obs$ = interval(1000).pipe(take(4));
const shared$ = obs$.pipe(
      shareReplay(1)
);
// obs$.subscribe(x => console.log('sub A: ', x));
// obs$.subscribe(y => console.log('sub B: ', y));

shared$.subscribe(x => console.log('sub A: ', x));
shared$.subscribe(y => console.log('sub B: ', y));


*/


// RxJS v6+
import { Subject, ReplaySubject } from 'rxjs';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';

// simulate url change with subject
const routeEnd = new Subject();
// grab url and share with subscribers
const source = routeEnd.pipe(
    tap(_ => console.log('executed')),
    pluck('url'),
    shareReplay(0)
);

source.subscribe(res => console.log('subscription 1: ', res))
routeEnd.next({ data: {}, url: 'my-path 60' });

source.subscribe(res => console.log('subscription 2: ', res));
routeEnd.next({ data: {}, url: 'my-path 70' });

source.subscribe(res => console.log('subscription 3: ', res));
routeEnd.next({ data: {}, url: 'my-path 80' });

source.subscribe(res => console.log('subscription 4: ', res));





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
//         // shareReplay(1)
//     );
// source.subscribe(x => console.log('subscription 1: ', x));
// source.subscribe(x => console.log('subscription 2: ', x));
// source.subscribe(x => console.log('subscription 3: ', x));
// source.subscribe(x => console.log('subscription 4: ', x));

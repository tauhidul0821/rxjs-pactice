// import { of, Observable, from, fromEvent, interval, Subject } from "rxjs";
// import { map, mapTo, take, tap, max, min, switchMap } from "rxjs/operators";


// let list1 = [3, 71, 45, 22, 11, 37, 27, 1];


// import { interval } from 'rxjs'
// import { take } from 'rxjs/operators'

// let test = interval(1000);
// let case2 = test.pipe(take(11));
// case2.subscribe(x=>console.log(x))

// import { Observable } from 'rxjs';
// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) { console.log('got value ' + x); },
//   error(err) { console.error('something wrong occurred: ' + err); },
//   complete() { console.log('done'); }
// });
// console.log('just after subscribe');


// const observer = {
//     next: x => console.log('Observer got a next value: ' + x),
//     error: err => console.error('Observer got an error: ' + err),
//     complete: () => console.log('Observer got a complete notification'),
// };
import { Subject } from 'rxjs';
 
const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(1);
subject.next(2);






// let test1 = of(1, 2, 3, 4, 5, 6)
// let case1 = test1.pipe(
//     filter(x => x % 2 === 0),
//     reduce((acc, one) => acc + one, 0)
// );
// case1.subscribe(x => console.log(x));


// of('Hello').subscribe(v => {
//     of(v => v + 'everyone').subscribe(x => console.log(x))
// })


// Used to perform side-effects for notifications from the source observable
// of(Math.random()).pipe(
//     tap(console.log),
/*
tap(p => {
    // tap map er age bosbe, & age filter kore map a niye jai
    // kono error message throw korar jonno tap bose
    console.log('p value is: ', p)

    if (p > 0.5) {
        throw new TypeError(`Value ${p} is greater then 0.5`)
    }
    return p;
}),
*/
    // map(n => {
    //     console.log('inside map: ', n)
    //     return n;
    // })).subscribe(console.log)

// const source = of(1,2,3,4,5);
// source.pipe(
//     tap(res=>{
//         if(res>3){
//             throw new TypeError(`value ${res} is greater than 3`)
//             // console.log(`value ${n} is greater than 3`)
//         }
//     })
// ).subscribe(console.log)







// from(list1).pipe(max()).subscribe(maxValue => console.log("Easy: The Max value is ", maxValue));
// from(list1).pipe(min()).subscribe(minValue => console.log("The Min value is ", minValue))


// from(list1).pipe(max((a, b) => a < b ? -1 : 1)).subscribe(maxValue => console.log("The Max value is ", maxValue));
// from(list1).pipe(min((a, b) => a < b ? -1 : 1)).subscribe(minValue => console.log("The Min value is ", minValue))

// of(1, 3, 5, 2).pipe(map(x => x * x)).subscribe((mapResult) => console.log('maping ->', mapResult))

// of(1, 3, 5, 2).pipe(switchMap((x)=>of()).subscribe((mapResult) => console.log('switchMap ->', mapResult))

// of(4, 2, 3).pipe(switchMap(x => of(x,x*3))).subscribe(res => console.log('Result is:', res))
// of(4, 2, 3).pipe(switchMapTo(x => of(x,x*3))).subscribe(res => console.log('Result is:', res))



// of(4, 2, 3).pipe(map(x => x * x)).subscribe((mapResult) => console.log('maping ->', mapResult))


/*

// how map works 
map(x => x * x)
    (of(1, 2, 3, 4, 5)).subscribe((v) => console.log('Output is: ', v))


// how observable create and next, when complete not going to next value 
var observable = Observable.create((observer) => {
    observer.next('Hello World!');
    observer.next('Welcome to JavaTpoint');
    observer.complete();
    observer.next('Bye');
})

observable.subscribe(
    (x) => logItem(x),//result 
    (error) => logItem('Error' + error), // error 
    () => logItem('This is the first Example') // final 
);

function logItem(val) {
    console.log('result', val)

}
*/



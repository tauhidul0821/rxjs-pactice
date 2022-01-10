// Same as Observable subscribe
/*
import { Observable } from "rxjs";

const observable = new Observable(observer => {
    observer.next('1');
    observer.next('2');
    // observer.error('Error occur')
    observer.next('3');
    observer.complete('completed');
    observer.next('4');
});

observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
});
*/

//  how we can subscribe subject

// import { Subject } from "rxjs";

// const subject$ = new Subject;

// subject$.next('1');
// subject$.next('2');

// subject$.subscribe(res => {
//     console.log(res)
// });

// subject$.next('3');
// // subject$.complete();
// subject$.error('error happen');
// subject$.next('4');

/*
import { Subject, Observable } from "rxjs";
const subject$ = new Subject();

const observable = new Observable(observer => {
    observer.next('first')
    observer.next('second')
    // observer.error('error')
});

subject$.subscribe(res => {
    console.log(res)
});

observable.subscribe(x => console.log(x))
*/
/** Multicast */
/*
import {Subject, Observable, of, from} from "rxjs";

const observable$ = new Observable(subscriber => {
    subscriber.next(Math.floor(Math.random() * 200) + 1)
})

const subject$ = new Subject();

observable$.subscribe(res => {
    console.log('Obs : 1', res)
})

observable$.subscribe(res => {
    console.log('Obs : 2', res)
})

subject$.subscribe(res => {
    console.log('Sub : 1', res)
})

subject$.subscribe(res => {
    console.log('Sub : 2', res)
})

subject$.next(Math.floor(Math.random() * 200) + 1)
// We have two subscribers of the observable. Both these subscribers will get different values. This is because observable on subscription creates a separate instance of the producer.
// next we create subscribers to the subject. The subject emits the value using the random number. Subjects maintain a list of subscribers.
// whenever a subscriber subscribes to a subject, it will add it to an array of subscribers.

*/


/* BehaviorSubject */
/*
import { BehaviorSubject } from "rxjs";

const subject$ = new BehaviorSubject("0");

subject$.subscribe(res => console.log('-first ->',res))
subject$.next('1');
subject$.next('2');

subject$.subscribe(res => console.log('second ->',res))

subject$.next('3')
subject$.next('4')

*/

/*
import { ReplaySubject } from "rxjs";
const subject$ = new ReplaySubject();

subject$.next('1');
subject$.next('2');

// subject$.subscribe(res => { console.log('Sub1 :#', res) })

subject$.subscribe(
    val => console.log('sub 1: ', val),
    err => console.log('sub 1: ', err),
    () => console.log('Sub 1 complete ')
)

subject$.next('3');
subject$.next('4');

subject$.subscribe(res => { console.log("sub2 :#", res) });

subject$.next('5');
subject$.complete();
subject$.next('6');


subject$.subscribe(res => { console.log("sub2 :#", res) });

subject$.next('7');
subject$.next('8');
*/

import { AsyncSubject } from "rxjs";

const subject$ = new AsyncSubject();

subject$.next('1');
subject$.next('2');

subject$.subscribe(
    val => console.log('sub1 #', val),
    err => console.log('sub1 #', err),
    () => console.log('sub1 # complete')
);

subject$.next('3')
subject$.next('4')

subject$.subscribe(
    val => console.log('sub2 #', val),
    err => console.log('sub2 #', err),
    () => console.log('sub2 # complete')
)

subject$.next('5')
subject$.complete();
subject$.error('err')
subject$.next('6');
subject$.subscribe(
    val => console.log('sub3 #', val),
    err => console.log('sub3 #', err),
    () => console.log('sub3 # complete'),
)



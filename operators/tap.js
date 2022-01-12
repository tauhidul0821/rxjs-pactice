/*
import { of, from } from "rxjs";
import { tap, filter } from "rxjs/operators";

const list1 = of(1, 2, 3, 4, 5, 6).pipe(
    // tap(
    //     x => console.log('from tap() = ', x),
    //     e => console.log(e),
    //     () => console.log('task completed')
    // ),
    filter(a => a % 2 === 0)
);

list1.subscribe(x => console.log('The even number is =', x))

*/


// import { of } from "rxjs";
// import { tap, map } from "rxjs/operators";

// of('tauhidul', 'asf', 'asfas').pipe(

//     tap(val => val.toUpperCase()),
//     map(val => 'Hi '+val ),
//     tap(val => console.log('second tap->', val)),

// ).subscribe(res => console.log('result    ->', res))


/**
 * tap is designed to allow the developer a designated place to perform side effects. while you could perform side-effects inside of a map or a margeMap, that would make their mapping functions impure, which isn't always a big deal, but will make it so you can't do things like memoize those functions. The tap operator is designed solely for such side effects to help you remove side-effects from other operations.
 * 
 * let's say you want to send a signal to a service or something but you don't want to actually manipulated the data you would use tap.
 * 
 * basically what tap does is it doesn't change the data in any way but no matter what you do inside of this function
 * 
 */






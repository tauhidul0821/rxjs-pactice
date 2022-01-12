/*
// map
import { of } from "rxjs";
import { map } from "rxjs/operators";

const data = [
    {
        brand: 'porsche',
        model: '911'
    },
    {
        brand: 'porsche',
        model: 'macan'
    },
    {
        brand: 'ferarri',
        model: '458'
    },
    {
        brand: 'lamborghini',
        model: 'urus'
    },
];

const ob1 = of(data);
const su = ob1.pipe(
    map(cars => cars.map(car => `${car.brand} ${car.model}`))

)

su.subscribe(car => console.log(car))
*/
/*
// margeMap
// # two observable 
import { of, from } from "rxjs";
import { map, mergeAll, mergeMap } from "rxjs/operators";
const getData2 = (para) => {
    return of(` I am second function ${para}`)
}

const getData = (param) => {
    return of(getData2(param))
}

// from([1, 2, 3, 4]).pipe(map(param => getData(param))).subscribe(val => val.subscribe(res => console.log(res)))
from([1, 2, 3, 4]).pipe(
    map(param => getData(param)),
    mergeAll(),
    mergeAll(),
).subscribe(val => console.log(val))
*/




// switchMap
// concatMap

/*
import { of, from } from 'rxjs';
import { map, mergeMap, delay, mergeAll, flatMap } from 'rxjs/operators';
const getData = (param) => {
    return of(`topic: ${param}`).pipe(
        delay(1000))
}
// using a regular map
from(['regular map# 1', 'regular map# 2', 'regular map# 3', 'regular map# 4']).pipe(
    map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data)));
// using map and mergeAll
from(['map and mergeAll# 1', 'map and mergeAll# 2', 'map and mergeAll# 3', 'map and mergeAll# 4']).pipe(
    map(param => getData(param)),
    mergeAll()
).subscribe(val => console.log(val))
// using mergeMap
from(['mergeMap# 1', 'mergeMap# 2', 'mergeMap# 3', 'mergeMap# 4']).pipe(
    mergeMap(param => getData(param))
).subscribe(val => console.log(val))
// flatMap
from(['flatMap# 1', 'flatMap# 2', 'flatMap# 3', 'flatMap# 4']).pipe(
    flatMap(param => getData(param))
).subscribe(val => console.log(val))

*/
/*
import { of, from } from 'rxjs';
import { map, delay, mergeMap, concatMap, mapTo } from 'rxjs/operators';

const getData = (param) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
        delay(delayTime)
    )
}

// using a regular map
from([1, 2, 3, 4]).pipe(
    map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log('map:', data)));

// using mergeMap
from([1, 2, 3, 4]).pipe(
    mergeMap(param => getData(param))
).subscribe(val => console.log('mergeMap:', val));

// using concatMap
from([1, 2, 3, 4]).pipe(
    concatMap(param => getData(param))
).subscribe(val => console.log('concatMap:', val));



from([1, 2, 3, 4]).pipe(
    map(param => getData(param)),
    mapTo(pram => getData('hi'))
).subscribe(res => console.log(res))

*/


import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';
//emit value every three seconds  
const source = interval(3000);
//map all emissions to one value  
const example = source.pipe(mapTo('Welcome to JavaTpoint!'));
const subscribe = example.subscribe(val => console.log(val));  

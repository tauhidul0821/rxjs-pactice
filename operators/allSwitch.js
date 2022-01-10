/*
import { of, from } from "rxjs";
import { map, delay, switchAll, switchMap } from "rxjs/operators";

const getSyncData = (param) => {
    return of(`${param}`)
}

const getAsyncData = (param) => {
    return of(`${param}`).pipe(
        delay(3000))
}

// using a regular map
from(['regular map# 1', 'regular map# 2', 'regular map# 3', 'regular map# 4']).pipe(
    map(param => getSyncData(param))
).subscribe(val => val.subscribe(data => console.log(data)))

// using map and switchAll
from(['map&switchAll# 1', 'map&switchAll# 2', 'map&switchAll# 3', 'map&switchAll# 4']).pipe(
    map(param => getSyncData(param)),
    switchAll()
).subscribe(val => console.log(val))

// using swithMap
from(['swithMap# 1', 'swithMap# 2', 'swithMap# 3', 'swithMap# 4']).pipe(
    switchMap(param => getSyncData(param)),
).subscribe(val => console.log(val))

// getAsyncData map&switchAll
from(['getAsyncData -> map&switchAll# 1', 'getAsyncData -> map&switchAll# 2', 'getAsyncData -> map&switchAll# 3', 'getAsyncData -> map&switchAll# 4']).pipe(
    map(param => getAsyncData(param)),
    switchAll()
).subscribe(val => console.log(val))

// getAsyncData swithMap
from(['getAsyncData-> swithMap# 1', 'getAsyncData -> swithMap# 2', 'getAsyncData -> swithMap# 3', 'getAsyncData -> swithMap# 4']).pipe(
    switchMap(param => getAsyncData(param)),
).subscribe(val => console.log(val))

*/

/*
import { of, BehaviorSubject } from "rxjs";
import { map, delay, switchMap } from "rxjs/operators";
const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red',]
const subject$ = new BehaviorSubject('');

const getData = (param) => {
    return of(`your params is params ${param}`).pipe(
        delay(1000))
}

const applyFilters = () => {
    filters.forEach((filter, index) => {
        let newFilters = subject$.value;
        if (index === 0) {
            newFilters = `?${filter}`
        } else {
            newFilters = `${newFilters}&${filter}`
        }
        subject$.next(newFilters)
    })
}

subject$.pipe(
    map(param => getData(param)),
).subscribe(val => val.subscribe(res => console.log(res)));

// subject$.pipe(
//     switchMap(param => getData(param))
// ).subscribe(val => console.log(val));

applyFilters()

*/

















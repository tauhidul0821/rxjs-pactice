import { Observable, of, from, BehaviorSubject } from "rxjs";
import { map, delay, mergeAll, switchAll, switchMap } from "rxjs/operators";


const data = of([
    {
        brand: 'porsche',
        model: '911'
    }, {
        brand: 'porsche',
        model: 'macan'
    }, {
        brand: 'ferarri',
        model: '458'
    }, {
        brand: 'lamborghini',
        model: 'urus'
    }
]);

// get data as band+model string.result: 
// ["porsche 911","porsche macan", "ferarri 458"]
// data.pipe(
//     map(cars=>cars.map(car=>`${car.brand} ${car.model}`))
// ).subscribe(res=>console.log(res));


// data.pipe(
//     map(cars=>cars.filter(car=>car.brand === 'porsche'))
// ).subscribe(console.log);



/** mergeAll */
// const getData = (param) => {
//     return of(`retrieved new data with param ${param}`).pipe(
//         delay(1000)
//     )
// }

// from([1, 2, 3, 4]).pipe(
//     map(param => getData(param)),
//     mergeAll()
// ).subscribe(console.log)

/** switchMap */

// const getData = (param) => {
//     return of(`Retrieved new data with param ${param}`).pipe(
//         delay(1000)
//     )
// }

//  using switchAll 
// from([1,2,3,4]).pipe(
//     map(param=>getData(param)),
//     switchAll()
// ).subscribe(res=>console.log(res))


// from([1, 2, 3, 4]).pipe(
//     switchMap(param => getData(param))
// ).subscribe(res => console.log(res))
/*

const filters = ['brand=porsche','model=911','horsepower=389','color=red'];
const activeFilters = new BehaviorSubject('');

const applyFilters = () =>{
    filters.forEach((filter,index)=>{

        let newFilters = activeFilters.value;
        if(index===0){
            newFilters= `?${filter}`
        }else{
            newFilters=`${newFilters}&${filter}`
        }

        activeFilters.next(newFilters)
    })
}
// using switchMap
activeFilters.pipe(
    switchMap(param=>getData(param))
).subscribe(console.log)

applyFilters()

*/



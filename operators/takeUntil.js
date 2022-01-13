import { interval, timer } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

const source = interval(1000);

const timer$ = timer(5000);

source.pipe(
    tap(x => console.log('from tap ', x)),
    takeUntil(timer$)
).subscribe(val => console.log(val))


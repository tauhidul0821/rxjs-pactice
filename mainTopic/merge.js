import { merge, interval } from "rxjs";
import { take } from "rxjs/operators";

const timer1 = interval(1000).pipe(take(11));
const timer2 = interval(1000).pipe(take(6));
const timer3 = interval(1000).pipe(take(8));

const concurrent = 2;

const merged = merge(timer1, timer2, timer3, concurrent);

merged.subscribe(res => console.log(res))




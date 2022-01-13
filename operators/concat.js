import { concat, interval, range } from "rxjs";
import { take } from "rxjs/operators";

const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);

timer.subscribe(t => {
    console.log('time ->', t)
})
result.subscribe(x => console.log('after concat ->', x));
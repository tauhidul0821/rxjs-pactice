import { interval } from 'rxjs';
import { share, map, take } from 'rxjs/operators';
const source = interval(1000)
    .pipe(
        take(3),
        map((x) => {
            console.log('-----print-----:', x);
            return x * x;
        }),
        share()
    );
source.subscribe(x => console.log('subscription 1: ', x));
source.subscribe(x => console.log('subscription 2: ', x));
source.subscribe(x => console.log('subscription 3: ', x));
source.subscribe(x => console.log('subscription 4: ', x));


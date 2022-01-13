import { timer, combineLatest } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";

const timerOne$ = timer(100, 4000);
const timerTwo$ = timer(200, 4000);
const timerThree$ = timer(300, 4000);

combineLatest([timerOne$, timerTwo$, timerThree$]).pipe(
    debounceTime(600)
).subscribe(console.log)
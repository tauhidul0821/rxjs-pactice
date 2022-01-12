import { timer, combineLatest } from "rxjs";

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

combineLatest([timerOne$, timerTwo$, timerThree$], (one, two, three) => {
    return `
Timer One- (1) Latest: ${one},
Timer Two- (2) Latest: ${two},
Timer Three (3) Latest: ${three},
`
}).subscribe(console.log)


import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject(0);

for (let i = 1; i < 60; i += 1) {
    setTimeout(() => {
        behaviorSubject.next(i);
    }, i * 1000);
}

console.log('First observer subscribes');
behaviorSubject.subscribe((value) => {
    console.log(`First observer receives: ${value}`);
});

setTimeout(() => {
    console.log('Second observer subscribes');
    behaviorSubject.subscribe((value) => {
        console.log(`Second observer receives: ${value}`);
    });
}, 2000);


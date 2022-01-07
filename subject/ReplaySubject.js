import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject(2);

for (let i = 0; i < 60; i += 1) {
  setTimeout(() => {
    replaySubject.next(i);
  }, i * 1000);
}

console.log('First observer subscribes');
replaySubject.subscribe((value) => {
  console.log(`First observer receives: ${value}`);
});

setTimeout(() => {
  console.log('Second observer subscribes');
    replaySubject.subscribe((value) => {
      console.log(`Second observer receives: ${value}`);
    });
}, 2000);
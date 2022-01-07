import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject();

console.log('First observer subscribes');
asyncSubject.subscribe((value) => {
  console.log(`First observer receives: ${value}`);
});

setTimeout(() => {
  console.log('Second observer subscribes');
  asyncSubject.subscribe((value) => {
    console.log(`Second observer receives: ${value}`);
  });
}, 2000);

for (let i = 0; i < 60; i += 1) {
  setTimeout(() => {
    asyncSubject.next(i);
    if (i === 59 ) {
      asyncSubject.complete();
    }
  }, i * 1000);
}
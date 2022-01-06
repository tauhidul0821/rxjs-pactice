/*
import { Subject } from 'rxjs';

const subject = new Subject();
 
console.log('Observer subscribes');
subject.subscribe((value) => {
  console.log(`Observer receives: ${value}`);
});

for (let i = 0; i < 60; i += 1) {
  setTimeout(() => {
    subject.next(i);
  }, i * 1000);
}
*/

import { Subject } from 'rxjs';
const subject = new Subject();

console.log('First observer subscribes');
subject.subscribe((value) => {
  console.log(`First observer receives: ${value}`);
});

setTimeout(() => {
  console.log('Second observer subscribes');
  subject.subscribe((value) => {
    console.log(`Second observer receives: ${value}`);
  });
}, 2000);

for (let i = 0; i < 5; i += 1) {
  setTimeout(() => {
    subject.next(i);
  }, i * 1000);
}
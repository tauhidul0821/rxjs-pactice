# RxJS Features Explained

This document provides a clean and simple explanation of the RxJS features used in the project, along with examples for better understanding.

---

## **1. RxJS Classes & Subjects**

### **Observable**
An `Observable` is like a stream of data that you can listen to over time.
```typescript
import { Observable } from 'rxjs';

const myObservable = new Observable<number>((observer) => {
  observer.next(1);
  observer.next(2);
  observer.complete(); // Signal that no more values will be emitted
});

myObservable.subscribe((value) => console.log(value));
// Output: 1, 2
```

### **Subject**
A `Subject` is like an `Observable`, but it can also emit values.
```typescript
import { Subject } from 'rxjs';

const mySubject = new Subject<number>();

mySubject.subscribe((value) => console.log('Subscriber 1:', value));
mySubject.subscribe((value) => console.log('Subscriber 2:', value));

mySubject.next(10);
// Output:
// Subscriber 1: 10
// Subscriber 2: 10
```

### **BehaviorSubject**
A `BehaviorSubject` holds a current value and emits the latest value to new subscribers.
```typescript
import { BehaviorSubject } from 'rxjs';

const myBehaviorSubject = new BehaviorSubject<number>(100);

myBehaviorSubject.subscribe((value) => console.log('Subscriber 1:', value));

myBehaviorSubject.next(200);
// Output: Subscriber 1: 100, Subscriber 1: 200

myBehaviorSubject.subscribe((value) => console.log('Subscriber 2:', value));
// Output: Subscriber 2: 200 (gets the latest value immediately)
```

---

## **2. RxJS Operators (Used to Modify Data Streams)**

### **switchMap**
Cancels the previous request and starts a new one when a new value is emitted.
```typescript
import { of, switchMap } from 'rxjs';

of('User123').pipe(
  switchMap((userId) => fetchUserData(userId))
).subscribe(console.log);

function fetchUserData(id: string) {
  return of(`Fetched data for ${id}`);
}
```

### **tap**
Performs a side effect (like logging) without modifying the data.
```typescript
import { of, tap } from 'rxjs';

of('Hello').pipe(
  tap((value) => console.log('Before:', value))
).subscribe(console.log);

// Output:
// Before: Hello
// After: Hello
```

### **map**
Transforms each emitted value.
```typescript
import { of, map } from 'rxjs';

of(2, 4, 6).pipe(
  map((num) => num * 10)
).subscribe(console.log);

// Output: 20, 40, 60
```

### **mergeMap**
Flattens inner `Observable`s but does **not** cancel previous ones.
```typescript
import { of, mergeMap } from 'rxjs';

of('User123').pipe(
  mergeMap((userId) => fetchUserData(userId))
).subscribe(console.log);

function fetchUserData(id: string) {
  return of(`Fetched data for ${id}`);
}
```

### **catchError**
Handles errors inside an `Observable`.
```typescript
import { of, throwError, catchError } from 'rxjs';

throwError(() => new Error('Something went wrong')).pipe(
  catchError((error) => of(`Handled Error: ${error.message}`))
).subscribe(console.log);

// Output: Handled Error: Something went wrong
```

---

## **3. Special Observables**

### **EMPTY**
An `Observable` that emits **nothing** and completes immediately.
```typescript
import { EMPTY } from 'rxjs';

EMPTY.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Completed')
});

// Output: Completed
```

---

## **4. Summary Table**

| Feature | Description |
|---------|-------------|
| **Observable** | Creates a stream of data |
| **Subject** | Observable that can emit values |
| **BehaviorSubject** | Holds the last emitted value |
| **switchMap** | Cancels previous observable and switches to a new one |
| **tap** | Executes side effects like logging |
| **map** | Transforms emitted values |
| **mergeMap** | Maps and flattens inner Observables |
| **catchError** | Catches and handles errors |
| **filter** | Filters emitted values |
| **debounceTime** | Delays emissions until no new values arrive within a time frame |
| **distinctUntilChanged** | Ignores consecutive duplicate values |
| **defaultIfEmpty** | Emits a default value if no data comes through |
| **finalize** | Executes code when an Observable completes or errors |
| **forkJoin** | Combines multiple Observables and waits for all to complete |
| **from** | Converts an array, promise, or iterable into an Observable |
| **of** | Creates an Observable from fixed values |
| **EMPTY** | Observable that emits nothing and completes immediately |

---

This document provides a clear and concise explanation of essential RxJS features. Feel free to use it in your GitHub repository! 🚀


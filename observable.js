import { Observable } from "rxjs";
const observable = Observable.create((observer) => {
    observer.next('A')
    observer.next('B')
    // observer.complete('Data stream is over..')
    setInterval(() => { observer.next('message..') }, 2000)
    observer.next('C')
    observer.next('D')
    setInterval(() => { observer.error('Error..') }, 4001)
    observer.next('E')
})
observable.subscribe(msg => console.log(msg))

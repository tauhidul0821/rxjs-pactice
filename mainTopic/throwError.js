import { throwError } from "rxjs";

const source = throwError('This is an error');

source.subscribe({
    res: val => console.log(val),
    complete: () => console.log('complete'),
    error: val => console.log(val)
})

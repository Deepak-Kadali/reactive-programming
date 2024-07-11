import { interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { fetchData } from './common/requests';



const apiCallObservable = interval(1000).pipe(
    take(5),
    mergeMap(() => fetchData()),
);

const observer = {
    next: (response: any) => console.log(response),
    error: (err: any) => console.log(err),
    complete: () => console.log('Success')
}
apiCallObservable.subscribe(observer);
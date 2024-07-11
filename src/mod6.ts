import { interval } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { fetchData } from './common/requests';



const apiCallObservable = interval(2000).pipe(
    concatMap(() => fetchData()),
);

const observer = {
    next: (response: any) => console.log(response.data.fact, 'response'),
    error: (err: any) => console.log(err, 'error'),
    complete: () => console.log('Success')
}
apiCallObservable.subscribe(observer);
// observer.unsubscribe()
// apiCallObservable.unsubscribe(observer);

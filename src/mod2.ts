import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import generateRandomCar from './mod1'
import { Car } from './common/types';

const carObservable1: Observable<Car> = interval(1000).pipe(
    map(() => generateRandomCar())
)

const carObserver1 = {
    next: (car: Car) => console.log(car),
    error: (err: any) => console.error(err),
    complete: () => console.log('Success')
}

const subscription = carObservable1.subscribe(carObserver1);
setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    carObserver1.complete()
    subscription.unsubscribe();
    carObserver1.next({
        name: 'last',
        model: 'Cruze',
        yearOfRelease: 1984,
        brand: 'Polestar',
        color: 'grey'
    })
}, 3000);

export default carObservable1
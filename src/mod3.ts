import { filter, Observable } from "rxjs";
import { Car } from "./common/types";
import carObservable1 from "./mod2";

const carObservable2: Observable<Car> = carObservable1.pipe(
    filter(car => ((car.color.toLowerCase() === 'black') && (car.yearOfRelease < 2000)))
);

const carObserver2 = {
    next: (car: Car) => console.log(car),
    error: (err: any) => console.error(err),
    complete: () => console.log('Success')
}


// carObservable2.subscribe(carObserver2);
export default carObservable2
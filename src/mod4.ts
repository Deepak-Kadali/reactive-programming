import { map, Observable } from "rxjs";
import { Scrap, Car } from "./common/types";
import carObservable2 from "./mod3";

const scrapObservable3: Observable<Scrap> = carObservable2.pipe(
    map(car => ({
        brand: car.brand,
        yearOfRelease: car.yearOfRelease,
    }))
);

const carObserver3 = {
    next: (car: Scrap) => console.log(car),
    error: (err: any) => console.error(err),
    complete: () => console.log('Success')
}


scrapObservable3.subscribe(carObserver3);
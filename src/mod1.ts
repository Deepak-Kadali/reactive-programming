import { faker } from '@faker-js/faker';
import { Car } from './common/types';

const generateRandomCar = (): Car => {
    return {
        name: faker.vehicle.vehicle(),
        model: faker.vehicle.model(),
        yearOfRelease: faker.date.birthdate({ max: 70, min: 1, mode: 'age' }).getFullYear(),
        brand: faker.vehicle.manufacturer(),
        color: faker.color.human(),
    };
}
const randomCar = generateRandomCar();
// console.log(randomCar);

export default generateRandomCar;


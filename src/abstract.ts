abstract class Vehicle {
	abstract wheels: number;

	start(): void {
		console.log('Starting Vehicle');
	}
}

class Car extends Vehicle {
	wheels: number = 4;
}

let car = new Car();
console.log(car.wheels); // 4
car.start(); // Starting Vehicle

class Bike extends Vehicle {
	wheels: number = 2;
}

let bike = new Bike();
console.log(bike.wheels); // 2
bike.start(); // Starting Vehicle

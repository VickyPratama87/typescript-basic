interface Laptop {
	name: string;
	on(): void;
	off(): void;
}

class Asus implements Laptop {
	name: string;
	isGaming: boolean;

	constructor(name: string, isGaming: boolean) {
		this.name = name;
		this.isGaming = isGaming;
	}

	on(): void {
		console.log('Asus On');
	}

	off(): void {
		console.log('Asus Off');
	}
}

let asus = new Asus('Asus', true);
console.log(asus.name); // Asus
console.log(asus.isGaming); // true
asus.on();
asus.off();

class Macbook implements Laptop {
	name: string;
	touchBar: boolean;

	constructor(name: string, touchBar: boolean) {
		this.name = name;
		this.touchBar = touchBar;
	}

	on(): void {
		console.log('Macbook On');
	}
	off(): void {
		console.log('Macbook Off');
	}
}

let macbook = new Macbook('Macbook', false);
console.log(macbook.name); // Macbook
console.log(macbook.touchBar); // false
macbook.on(); // On
macbook.off(); // Off

function getName(): string {
	return 'Hello, My name is Vicky';
}
// console.log(getName()); // Hello, My name is Vicky

function getAge(): number {
	return 23;
}
// console.log(getAge()); // 23

function printName(): void {
	console.log('Hello world');
}
// printName(); // Hello world

function bebas(): any {
	// return 'Bebas donk';
	// return 123;
	return true;
}
// console.log(bebas()); // Bebas donk

// Argument type
function multiply(val1: number, val2: number): number {
	return val1 * val2;
}

// const result = multiply(2, 4);
// console.log(result); // 8

// Function as type
type Tambah = (val1: number, val2: number) => number;

const addNumber: Tambah = (val1: number, val2: number): number => {
	return val1 + val2;
};

const result = addNumber(2, 8);
// console.log(result);

// Default parameter
const fullName = (firstName: string, lastName: string = 'Pratama'): string => {
	return `${firstName} ${lastName}`;
};

// console.log(fullName('Vicky')); // Vicky Pratama
// console.log(fullName('Vicky', 'Mahardyka')); // Vicky Mahardyka

// Optional parameter
const getNumber = (val1: number, val2?: number): string => {
	return val1 + ' ' + val2;
	// return val1 + val2;
};

console.log(getNumber(2, 3));

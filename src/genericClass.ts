class List<T> {
	private data: T[];

	constructor(...elements: T[]) {
		this.data = elements;
	}

	add(element: T) {
		this.data.push(element);
	}

	addMultiple(...elements: T[]) {
		this.data.push(...elements);
	}

	delete(element: T) {
		this.data = this.data.filter((el) => el !== element);
	}

	getAll(): T[] {
		return this.data;
	}
}

// instantiate the class
let numbers = new List<number>(1, 2, 3);
console.log(numbers.getAll()); // [1, 2, 3]
numbers.add(4);
numbers.addMultiple(5, 6, 7);
numbers.delete(3);
console.log(numbers.getAll()); // [1, 2, 4, 5, 6, 7]

let random = new List<string | number | boolean>('Vicky', 23, true);
random.addMultiple('Meysa', 37, false);
random.delete(false);
console.log(random.getAll()); // ['Vicky', 23, true, 'Meysa', 37]

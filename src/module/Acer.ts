import Laptop from './BaseLaptop';

class Acer<T> extends Laptop<T> {
	constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
		super(name, type, numeric, touchButton);
	}
}

export default Acer;

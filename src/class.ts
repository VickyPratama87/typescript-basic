export class User {
	public name: string;

	constructor(name: string, public age: number) {
		this.name = name;
		// this.age = age;
	}

	// Method
	setName(value: string): void {
		this.name = value;
	}

	getName = (): string => {
		return this.name;
	};
}

// let user = new User('Vicky', 23);
// console.log(user);

class Admin extends User {
	read: boolean = true;
	write: boolean = true;
	phone: string;
	private _email: string = '';

	// Static Property
	static getRoleName: string = 'Admin';

	constructor(phone: string, name: string, age: number) {
		super(name, age);
		this.phone = phone;
	}

	// Static Method
	static getNameRole() {
		return "I'm Admin";
	}

	getRole(): { read: boolean; write: boolean } {
		return {
			read: this.read,
			write: this.write,
		};
	}

	set email(value: string) {
		if (value.length < 5) {
			this._email = 'Email is Invalid';
		} else {
			this._email = value;
		}
	}

	get email(): string {
		return this._email;
	}
}

// let admin = new Admin('0897654321', 'Vicky', 23);
// admin.getName();
// admin.getRole();
// admin.setName('Puput');
// admin.phone;
// admin.email = 'v@gmail.com';

let admin = Admin.getNameRole();
console.log(admin); // I'm Admin

// string
let nama: string = 'Vicky';
nama = 'Pratama';

// number
let umur: number;
umur = 23;
umur = 20;

// boolean
let isMarried: boolean;
isMarried = true;
isMarried = false;

// any
let heroes: any = 'Iron Man';
heroes = 20;
heroes = [];
heroes = {};
heroes = true || false || 'string';

// union type
let phoneNumber: number | string;
phoneNumber = 628123456;
console.log(typeof phoneNumber); // number

phoneNumber = '08123456';
console.log(typeof phoneNumber); // string

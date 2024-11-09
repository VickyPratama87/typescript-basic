import Asus from './Asus';
import MacBook from './Macbook';
import Acer from './Acer';

// Instance
let asus = new Asus('VivoBook', false, true);
console.log(asus);
asus.a();

let asusROG = new Asus('ROG', true, true);
console.log(asusROG);

let macbook = new MacBook(2024, false, false);
console.log(macbook);
macbook.b();

let acer = new Acer('Acer', 'Predator', true, false);
console.log(acer);

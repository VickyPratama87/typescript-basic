function getData(value: any) {
	return value;
}

console.log(getData('Vicky').length); // 5
console.log(getData(123).length); // undefined

// Generic
function myData<T>(value: T) {
	return value;
}

console.log(myData('Vicky').length); // 5
// console.log(myData(123).length); // Error

const arrowFunc = <T>(value: T) => {
	return value;
};

console.log(arrowFunc('Vicky').length); // 5

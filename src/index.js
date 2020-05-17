import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
`;

//in C we can deal with strings as an array of chars, unlike JavaScript where the string is immutable.
const myString = 'This is my name: Oussama!';
const myArray = myString.split('');
for (let i = 0; i < myArray.length; i += 1) {
	if (myArray[i].charCodeAt(0) >= 97 && myArray[i].charCodeAt(0) <= 122) {
		myArray[i] = String.fromCharCode(myArray[i].charCodeAt(0) - 32);
	}
}
console.log(myArray.join(''));

//primitive data types are passed to function by value.
let a = 10;
let myArr0 = [1, 2, 3];
const setInt = (x) => (x = 22);
let b = setInt(a);
console.log(b, a);
const setArr = (arr) => (arr[0] = 22);
setArr(myArr0);
console.log(myArr0);

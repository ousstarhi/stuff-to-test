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

const name = "payal"
const myBooksCount = 20

//old way to write code - console.log(name + myBookscount + "Comics")
//string pattern - (`` this is backtivks sign help in string interpolation.) 
// below is showing modern way syntax which is know as string interpolation.


console.log(`Hey, my name is ${name} and I have ${myBooksCount} books`);

const bookName = new String ('Winngs of fire')
console.log(bookName [0]);
console.log(bookName.__proto__);

console.log(bookName.length);
console.log(bookName.toUpperCase());
console.log(bookName.charAt(2))
console.log(bookName.indexOf('s'));

const newString = bookName.substring(0,6);
const anotherString = bookName.slice(14,-4);

console.log(newString);
console.log(anotherString);





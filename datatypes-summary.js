// # primitive
//7 types- String, Number, Boolearn, Null, Unidentified, Symbol, BigInt

//# reference type (non- primitive)
//Types - Arrays, Objects, Functions

//Example

const name = ("payal");
const score = 100;
const isLoggedIn = false;
const temperatue = null;
let accountCity;
const id = Symbol('123')
const anotherId = Symbol('123');

//Types - Arrays, Objects, Functions

//array : always in square bracket []

const flowers = ["mogra", "lily", "rose"]

//object : are in { } brackets

let Myobject = { 
    name: "payal",
    age: 25,

}

//function - (){} both brackets are there in function

const Myfunction = function(){
    console.log("hello world")
}
/////////////////////////////////////////////////

//MEMORY
// Stack memory (use in primitive type) & Heap Memory (use in non-primitive type)
//stack example

let myBookName = "wings of fire"
let secondBookName = myBookName
secondBookName = "Destiny"

console.log(myBookName);
console.log(secondBookName);
//In stack memory we get changes in copy file not the main file..

//Heap Example

let userOne = {
    email: "payal@gmail.com",
    age: "22years"
}

let userTwo = userOne;

userTwo.email = "p@googl.com"

console.log(userOne);
console.log(userTwo);

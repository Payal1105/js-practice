const myArr = [1,2,3,4,5,6]
const myNewArray = ["Red","Green","blue"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr)
// console.log(myArr2)
// console.log(myNewArray)

////Array Methods ---->

myArr.push(6)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(1)
//console.log(myArr)

myArr.shift()
//console.log(myArr)
// console.log(myArr.includes(6))
// console.log(myArr.indexOf(8))
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(1))

// Slice & Splice ----->
// console.log("A", myArr);

const myNA1 = myArr.slice(2,5);

// console.log(myNA1);
// console.log("B", myArr);

const myNA2 = myArr.splice(2,5);
// console.log(myNA2)
// console.log("C", myArr);

//splice manipulates the original array while slice didn't make any changes in original array.





//--------------------------------------------------------------------------------------------------------------



const mySubjects = ["Science","English","Maths","Social Science"]
const myMarks = ["98","70","87","89"]

//mySubjects.push(myMarks)
//console.log(mySubjects);

const newArray2 = mySubjects.concat(myMarks);
//console.log(newArray2)
const Array2 = [...mySubjects,...myMarks]
//console.log(Array2)
//concat and spread(...any array,...any array) bothe used to merge arrays.

const superArray = [1,2,3,4,[5,6,7],8,9,[10,11,12,[13,14]]]
const realArray = superArray.flat(2)
//console.log(realArray)

//console.log(Array.isArray("Payal"))
//console.log(Array.from("Payal"))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of  (score1,score2,score3));

//instead of "from" you can use "of" for merging array or forming new array from any strings, objects or elements. 


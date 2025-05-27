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

mySubjects.push(myMarks)
console.log(mySubjects);

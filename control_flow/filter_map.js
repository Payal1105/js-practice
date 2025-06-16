// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter ((num) => {
//     return num>4
// })
// //console.log(newNums);

// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNum = []
// myNum.forEach ((num) =>{
//     if (num>4) {
//         newNum.push(num)
//     }
// }
// )
// console.log(newNum);


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.map((num) => {return num + 10});
console.log(newNums)
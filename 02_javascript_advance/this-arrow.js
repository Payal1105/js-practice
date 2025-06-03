// const user = {
//      username: "Payal",
//      regprice:999,
//     welcomeMessage: function () {
//        // console.log(`${this.username}, Welcome to Website.`)
//        // console.log(this);
        
//     }
//     // here we have use [``] and "this" is the keyword used to show current context to access variable in the scope.
// }
// user.welcomeMessage()
// // next we have change the contet- changes in username
// user.username = "sam"
// user.welcomeMessage()

// //console.log(this)
// // here when we print this using console log we get {} empty brackets.

// function sam (){
//     //console.log(this)
// }
// sam()
// // here when we use "this" to print inside the function we get lots of values in return

// const sam = () =>{
//     let username = "may"
//     //console.log(this)
// }
// sam()

//============================ ARROW =========================

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

//if we use {} cyrly brackets then we have to use "return" keyword called as "explicit retun" but instead we can also use () brackets where we dont need to use"return" keyword called as "implicit return".

// const addTwo = (num1, num2) =>  num1+num2
//this is called implicit return where we dont need to use return keyword   

const addTwo = (num1, num2) =>  (num1+num2)
// this technique is mostly used in "react" instead of {} we use() and dont use "return" keyword.
console.log(addTwo(5,10))
// function myNewFunction() {
//     console.log("P");
//     console.log("A");
//     console.log("Y");
//     console.log("A");
//     console.log("L")
// }

// myNewFunction()

// function add2numbers(number1, number2) {
//     console.log(number1 +  number2)
// }

// add2numbers(4,6)

function add2numbers(number1, number2) {
    let result = number1 + number2
     return number1 + number2
    return result
   

}
const result = add2numbers(3,5)
//console.log("result: ", result);

// function logInUserMessage(username) {
//     if (username === undefined){
//         console.log("please enter username" )
//     }
//     return `${username} just logged in`
    
//console.log (logInUserMessage("payal"))
//console.log (logInUserMessage())

//-------------------------------------------------->>
//(...num1) this three dots is known as spread and rest operator.

function calculateCartPrice(...num1){
return num1
}

//console.log(calculateCartPrice(1890,1250,765,300,500));

const user = {
    username: "sam@123",
    price: 299
   
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}. `);
    
}
handleObject(user)


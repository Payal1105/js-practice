let score = undefined
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//NaN is Not a Number//
//"55" => 55 number can easily convert//
//"55ab" => NaN//
//true => 1 ; false => 0//

let isLoggedIn = "payal"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 = true ; 0 = false ; "" = false//

let someNumber = 20
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//..........................OPERATION..................//
let value = 5
let negValue = -value
console.log(negValue);
 
let str1 = "hello "
let str2 = "payal"

let str3 = str1 + str2
//console.log(str3);
//console.log("2" + 1);
//console.log(2 + "1");
//console.log("2" + 1 + 1);
//console.log(2 + 1 + "1");
 //its all the rupe and regulation of ECMA rule according to which we are getting the output.
 https//tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-toprimitive//

 let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
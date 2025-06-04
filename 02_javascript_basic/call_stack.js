let val1 = 10
let val2 = 20
function addNumber(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNumber(val1 + val2)
let result2 = (5+10)
console.log(result2)


// steps in the above code-->
// 1. Global execution also know as global environment--> first of all every code run under Global EP and allocated in "this" variable

// 2. Memory Creation Phase --> here collected all variables and store it.
// for ex. val1,val2 in above code will show undefined. add num shows functions definition i.e. content inside function. result1 and result 2 will be undefined. (know as first cyle)

// 3. then starts 2nd phase execution phase-->
// in execution phase val1, and val2 takes value 10 & 20 respectively. in add num there is nothing to execute, in result1 there is functiion add num here new box will open showing "new variable environment + execution thread" where all process will repeat from memory phase and this is becaus "addnumber" is a function.

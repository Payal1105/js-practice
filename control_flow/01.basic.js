const isUserLoggedIn = true
const temperature = 41

if (temperature===41) {
    //console.log("less than 50")
}
else{
    //console.log("temperature is greater than 50");
}

//console.log("executed");

//Different conditions-
// <,>,<=,>=,==,!=,===,!==

const score = 200

if (score>100) {
    let Power= "fly"
    //console.log(`userPower: ${Power}`)
 
}
    //console.log(`userPower: ${Power}`)

    const balance = 1500
    if (balance<500) {
        //console.log("less than 500")
        
    } else if (balance < 750){
        //console.log("less than 750")
    } else if (balance < 1000){
        //console.log("less than 1000")
    } else{
       // console.log("less than 1900")
    }


    const userLoggedIn = true
    const debitCard = true
    const loggedInFromGoogle = true
    const loggedInFromEmail = true

    if (userLoggedIn && debitCard) {
        console.log("allow to do shopping")
    }

    if (loggedInFromEmail || loggedInFromGoogle) {
        console.log("User Logged In.");
    }
//--------------Truthy and falsy--------->
    //const userEmail = "payal@google.in"
     const userEmail = ""
    if(userEmail){
        console.log("Got user email")
    } else {
        console.log("don't have user email");
        
    }
    //truthy and falsy value
    // false value----> false, 0, -0, BigInt 0n, null, undefined, NaN, ""
    //truthy values -----> "0" (zero inside string is truthy value), "false"(false in single or double quote is truthy values), " " (anything inside string is truthy value), {}, [], function(){}

    // if (userEmail.length===0) {
    //     console.log("Array is empty.")
    // }

    const emptyObj = {}
    if(Object.keys(emptyObj).length===0){
       console.log("object is empty");
       
    }

    //Nullish Coalescing Operator (??) : Null Undefined

    let val1 
    //val1 = 5 ?? 10
    //val1 = null ?? 10

    //val1 = undefined ?? 15
    val1 = null?? 30 ?? 15
    console.log(val1);
    
// nullish coalescing operator and terniary operator are different.

// Terniary Operator-->
// Condition ? true : false

const iceteaPrice = 100
iceteaPrice <=80 ? console.log("less than 80"): console.log("more than 80")

//singleton ---> this forms by constructor. not by literals
//Object.ccreat --> when we create the object by using object.create is known as constructor and it forms singlton always.

//object literal ----->

const mySym = Symbol("key1")


const JsUser = {
    "name" : "payal",
    age : 23,
    [mySym] : "mykey1",
    "full name" : "xyz",
    location: "Nagpur",
    isLoggedIn: false,
    email: "payal@gmail.com",
}


// console.log(JsUser.location)
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym])


JsUser.email = "payal@google.com"
//Object.freeze(JsUser)
JsUser.email= "megha@gmail.com"
//console.log(JsUser)

JsUser.greetingTwo = function(){
    console.log(`Hello User,${this.name}`)
}

//console.log(JsUser.greetingTwo())

//-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const amazonUser = new Object()
console.log(amazonUser)
const amazonUser2 = {}
console.log(amazonUser2)
amazonUser.Id = "123xyz"
amazonUser.name = "ammy"
amazonUser.isLoggedIn = false

console.log(amazonUser)



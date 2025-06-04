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
//console.log(amazonUser)
const amazonUser2 = {}
//console.log(amazonUser2)
amazonUser.Id = "123xyz"
amazonUser.name = "ammy"
amazonUser.isLoggedIn = false

//console.log(amazonUser)

const regularUser = {
    email: "megha@google.in",
    fullName: {
        username:{
            firstname: "payal",
            lastname : "Kamble"
        }

    }
}

 //console.log(regularUser.fullName?.username.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = {obj1,obj2}
//console.log(obj4);
const obj5 = Object.assign({},obj1,obj2,obj3)
//console.log(obj5);

const Users = [
    {
        id : 1,
        email: "p@google.com"

    },
    {
        id : 2,
        email: "a@google.com"

    },
    {
        id : 3,
        email: "m@google.com"

    }

]
Users[1].email
//console.log(amazonUser)

//console.log(Object.keys(amazonUser));
//console.log(Object.values(amazonUser));

//console.log(Object.entries(amazonUser));

//---------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Object De-structure ---->

const course = {
    coursename: "Json",
    coursefees:999,
    courseInstructor: "xyz"
}
//course.courseInstructor
const{courseInstructor} = course
console.log(courseInstructor);
//console.log(instructor)



 
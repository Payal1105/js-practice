const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}). then(function(){
    console.log("Async 2 resolved")
})

  const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "Spade.006", email:"spade@gmail.com"})
    },1000)
  })
  promiseThree.then(function(user){
    console.log(user);
  })

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "payal", password:"123"})
       } else {
        reject('ERRROR: Something went wrong.')
       }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username); 
}).catch(function(error){
     console.log(error); 
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"medha", password:"1234"})
        }else {reject('ERROR:JS WENT WRONG')}
    },  1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
    console.log(error)
}
    // const response = await promiseFive
    // console.log(response);
}

consumePromiseFive()

async function getAllUsers() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()
    console.log(data);
} catch (error){
    console.log("E: ", error);
    }    
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
console.log(this)
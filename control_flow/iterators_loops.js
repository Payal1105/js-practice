//for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("5 is the best score")
//     }
//     console.log(element)
// }

//_____________________________________________________________________________________________________


for (let i = 0; i <= 10; i++) {
   //console.log(`Outer loop value is: ${i}`);
    for (let j = 0; j <=10; j++) {
    //console.log(`Inner loop value ${j} and inner loop value is ${i}`)
   // console.log(i + '*' + j + '=' + i*j);
    
   }
}

//__________________________________________________________________________________________________________________


// While & Do While loop------>

let index = 0
while (index<=10) {
    //console.log(`value of index is ${index}`)
    index= index+2
} 

//__________________________________________________________________________________________________________

//brak and continue---->
for (let index = 1; index <= 10; index++) {
    if (index==5) {
        console.log("5 detected");
       // break (it stop the printing after the mistake)
       continue //(it gives one chance and continue to print after mistake)
    }
   //console.log(`value of 1 is ${index}`);   
}

//__________________________________________________________________________________________________


//while loop on array--->
let myArray = ["planet, Sun, moon, stars"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`value is ${myArray[arr]}`)
    arr = arr +1 
}

//__________________________________________________________________________________________________________


//Do While loop---->

let score = 11

do {
    //console.log(`score is ${score}`);
    score++
} while (score<=10);

//________________________________________________________________________________________________________


//High Order Array loop----------------->
//for of loop =====>
const greetings = "HELLO WORLD"
for (const greet of greetings) {
    //console.log(`Each Char of ${greet}`)
}

//________________________________________________________________________________________________________


//Maps==========>>>>

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK',"United Kingdom")
map.set('Fr',"France")
map.set('IN', "India")

//console.log(map)

for (const [key,value] of map) {
  //  console.log(key, ':=>', value)
}
//______________________________________________________________________________________________________

//for In Loop ====>

const programming1 = ["js","C++","Python","React"]

for (const key in programming1) {
   //console.log(programming1);
}

const programming = ["js","C++","Python","React"]

for (const key in programming) {
   //console.log(programming[key]);
}

programming.forEach(function(item) {
    //console.log(item)
})

const programming2 = ["js","C++","Python","React"]
array.forEach((item,index) => {
    //console.log(item,index)
});
//var atom1 = 400

if(true){
    let atom1 = 10
    const atom2 = 20
    var atom3 = 30
   //console.log("inner:",atom1);
   
}

//console.log(atom1);
//console.log(atom2);
// console.log(atom3);

function One (){
    const username= "Sammy"

    function Two () {
        const website = "Google"
       // console.log(username);

    }
    //console.log(website);
 Two()

}
One()

if (true) {
    const username = "Payal"
    if (username==="Payal") {
        const website = " youtube"
      //console.log(username + website);

    }
    //console.log(website);
    //this console log wont work because "website"  scope is in between {}. 

}
//console.log(username);

//-------------------------------------------------------------------

//console.log(addOne(10))
function addOne(num) {
    return num + 1
    
}
//in above case we can acces add one before initialization.


addTwo(10)
const addTwo =function (num) {
 return num + 2   
}
 //in above case we can't acces add two before initialization. this synta is different as we have used const here

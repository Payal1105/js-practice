
//named IIFE
(function One(){
    console.log(`DB CONNECTED`)
})();

//unnamed IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Payal')

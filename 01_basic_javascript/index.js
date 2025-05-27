console.log("Hello, Node.js!");
function greet(name) {
    return `Hello, ${name}!`;
}
const message = greet("Developer");
console.log(message);

const accountId ="1105"
let accountEmail = "p@gmail.com"
var accountPassword = "1234"
accountCity = "Nagpur"

/*don't use var instead use let 
(because of the issue of block scope and functional scope"{}")
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);


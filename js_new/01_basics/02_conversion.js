let score =  "Bhargav"

// console.log(typeof(score));

let NumberScore = Number(score)
// console.log(typeof(NumberScore)); // output =>  number
// console.log(NumberScore) // o/p => NaN not a number because it contains only string and no value



// let newscore = "32"
// let newscore = "32abc"
// let newscore = undefined
// let newscore = null
// let newscore = true
let newscore = false

// let newNumberScore= Number(newscore)
// console.log(typeof newNumberScore);
// console.log(newNumberScore);



/* 
    "32" => 32
    "32abc" => NaN
    "Bhargav" => NaN
    undefined => NaN
    null => 0
    true => 1
    false => 0
 
*/

let isLoggedIn = "123"
// console.log(typeof(isLoggedIn));

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn);

/* 
    1 => true
    0 => false
    "" => false
    "Bhargav" => true
*/

let age = 123

let stringAge = String(age)
// console.log(typeof stringAge);
// console.log(stringAge);

/* 
    123 => "123"
    true => "true"
    false => "false"

*/

const num = null


console.log(typeof num);

const newBool = Boolean(num)
console.log(typeof newBool);
console.log(newBool);



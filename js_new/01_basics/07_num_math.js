const score  = 400
// console.log(score);
// but the score is value is not sure that it is a number

const newScore  = new Number(400)
// console.log(newScore);
// now the newScore is sure a number as decalred above and console log returns an object

const anotherNumber  = 1123.756
// console.log(anotherNumber.toPrecision(4));
// toPecision(length)  => consibers the length of the number as passes and remaining it rounds off based on the decimal values
// cautiously shd use the toPrecision value 

// console.log(Math.round(45.67)) // roundes of the passed value
// console.log(Math.ceil(45.1));
// console.log(Math.floor(45.9));
// console.log(Math.min(10,2,-2,6,1));
// console.log(Math.max(-2,-5,-1,10));
// console.log(Math.abs(-4)); // absoulte value is given

console.log(Math.random()); // generates numbers b/w 0 and 1

console.log(Math.floor((Math.random() * 10) + 1)); // to get the values above 1

min = 10
max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));










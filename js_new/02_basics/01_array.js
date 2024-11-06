const { logger } = require("prompt")

const superHeros = ["Ironman","spiderman","hulk","caption America"]
const dc_heros = ["superman","Batman","flash"]

superHeros.push("Black Panther") // adds the values to the end of the array
// console.log(superHeros)

dc_heros.pop()
// console.log(dc_heros)

// console.log(superHeros.toString());  // converts the array to the string
// console.log(typeof superHeros.toString()) // string

superHeros.unshift("Thanos") // adds the values to the begining of the array
// console.log(superHeros);

superHeros.shift()
// console.log(superHeros);

const newArray =  superHeros.concat(dc_heros)
// console.log(newArray);

const anotherArray = [...superHeros , ...dc_heros] // use of spread operatorn standard way of concating two arrays
// console.log(anotherArray);

// console.log(superHeros.join(","));
// console.log(superHeros.join(" "));
// console.log(typeof superHeros.join(",")); // String

const numberArray = [0,1,2,3,4,5]

console.log(numberArray.slice(1,3)); // the original array is not altered . doesn't consider the last index 
console.log(numberArray);

console.log(numberArray.splice(1,3)); //the oeiginal array is altered , removes the elements in the specified index .Includes the last index too
console.log(numberArray);

// slice and splice imp for interview









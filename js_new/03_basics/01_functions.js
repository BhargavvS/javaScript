function printName() {
    console.log("B");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("g");
    console.log("a");
    console.log("v");
}

// printName()
// printName()

function additionOftwoNumbers(number1, number2) {
    return number1+number2
}

// additionOftwoNumbers(2,4)
// additionOftwoNumbers(2,"4")
// console.log(additionOftwoNumbers(2 , undefined))

function loginUserMessage(username) {

    // if(username === undefined)  {
    //     console.log("Please enter a valid name");
    //     return
    // }

    if(!username) {
      console.log("Please enter a valid name");
        return
    }
    return `${username} have successfully logged In`
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400))

const obj1 = {
    username  : "Bhargav",
    price : 1400
}

function handlObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handlObject(obj1)

handlObject({
    username : "bhargav",
    price : "1500"
})

const newArray = [10,20,30,40,50]


function secondValueOfArray(anyArray) {
        return anyArray[1]
}

// console.log(secondValueOfArray(newArray));
console.log(secondValueOfArray([1,2,3,4,5]));


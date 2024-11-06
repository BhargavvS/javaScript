// Two Data Types : 1> primitive and non primitive data Types

// primitive data type :  Strings , numbers , boolean , BigInt , null , undefined , Symbol

const score = "124"
const ScoreNumber = 1234
const isLoggedIn = true
const bigIntNumber = 1234567890n
const id = Symbol('123')
const anotherId = Symbol('123')
let                                                                                                                                                                                                                              = null
let value;
// given the same value but it uniquely identifies id and anotherId

// non - primitive data type  : Arrays , objects , functions

let superHeroes = ["spider-man" , "Iron-man" , "Caption America", "Doctor Strange" , "Hulk"]

let obj1 = {
    name : "Bhargav",
    age : 21 ,
    college : "dsatm"
}

let Function1  = function() {
    console.log("hello world");
}

/* 
    datatypes of the varibles

    score = String,
    ScoreNumber = number,
    isLoggedIn = boolean,
    bigIntNumber = BigInt ,
    id and anotherId = Symbol ,
    outsideTemp = null , dataType(null) = object ,
    value = undefined

    dataType(Array) = object (functionObject)
    dataType(object) = object,
    dataType(Functions) = Function (FunctionObjects)

*/

// console.log(typeof Function1);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory types :  Stack (primitive datatypes) and heap (non primitive datatypes)

// all vales of primitive dt are stored as a copy in the stack => operations are performed on the copy of the data stored in the heap
// while all non primitive dt are stored by reference => the operation is done on the actaul values 

let  Name = "Virat Kholi"
let  anothername = Name
anothername = "Bhargav"

console.log(Name);
console.log(anothername);

// the value updated in anothername doesn't update the value in the Name => this is because only the copy of the name is stored in anothername 

const obj3 = {
    name: "Bhargav",
    email: "Bhargav@google.com"
}
const obj4 = obj3
obj4.email = "Microsoft@google.com"


console.log(obj3.email);
console.log(obj4.email);

// the value if the obj3 is stored in the heap and the reference of the valuie is given to obj3 simillary given to the obj4
// value changed in one of the object the actaul value of both the objects are changed 






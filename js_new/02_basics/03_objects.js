// two ways of declaring a object => 1> literals and 2> object constructor

//object constructor => singleTon object and literals => non-singleTon objects

const sym = Symbol("key1")

const user = {
    name : "Bhargav",
    "full name" : "Bhargav Achari",
    [sym] : "mykey1",
    email : "Bhargav@googlr.com",
    isLoggedIn : true,
    age : 20,
    sum : function() {
        console.log(2+3);
    },
    names : ["Bhargav" ,"kushi", "riyaa" , "Arun"]
}

// console.log(user);
// console.log(user.age);
// console.log(user.email);
// console.log(user["name"]);

user.email = "bhargav@amazon.com"
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[sym]);
// console.log(typeof user["sym"]); // string and not a SYMBOL when not declared within the sqaure brackets[] and it can be assessed only using througth the [] symbol
// console.log(user);                           

user.list = [0,212,3,4,5,6]
// console.log(user);

user.superheroes = ["batman","ironman","spiderman","hulk","flash"]
// console.log(user);

user.Print = function() {
    console.log("hello world");
    
}

// console.log(user.Print); // o/p -> [function (anonymous)]
console.log(user.Print()); // hello world and undefined 
console.log(user);

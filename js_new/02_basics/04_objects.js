// const newOnj = new Object() // single ton object as same as literals 

const TInderUser = {}

TInderUser.id = "123abc"
TInderUser.email = "bhargav@google.com"
TInderUser.name = "Bhargav"
TInderUser.isLoggedIn = false

// console.log(TInderUser);


// nestd objects
const regularuser  = {
    email :"bhargav@microsoft.com",
    fullname : {
        userfullname : {
            firstName : "Bhargav",
            lastname : "Achari"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstName); 

const obj1 = {1:"a" , 2:"b" , 3:"c"}
const obj2 = {4:"a" , 5:"b" , 6:"c"}
const obj3 = {7:"a" , 8:"b" , 9:"c"}

// const obj4 = Object.assign({},obj1,obj2,obj3) // syntax => object.assign(target,source) . since it returns a new object itself we store it in a new object itself . 
// if wedon't give the target object as {} , then the first obj is considered as the target object and all the other objects are pushed into it 


const obj4 = {...obj1 , ...obj2 , ...obj3} // use of spread operator
// console.log(obj4);

const user  = [
    {
        name: "bhargav1",
        email : "bhargav@google.com",
    },
    {
        name: "bhargav2",
        email : "bhargav@google.com",
    },
    {
        name: "bhargav3",
        email : "bhargav@google.com",
    },
    {
        name: "bhargav4",
        email : "bhargav@google.com",
    }
]

// console.log(user[0].name)

// console.log(TInderUser);

// console.log(Object.keys(TInderUser)); // returns a array of keys
// console.log(Object.values(TInderUser)); // returns a array of values
// console.log(Object.entries(TInderUser)); // returns a array with each key value pair as its sub arrays


// ++++++++++++++++++++ DESTURCTING OF OBJECTS +++++++++++++++++++++++++++++++++++++

const course = {
    name : "javaScript",
    courseInstructor  : "hitesh choudary",
    fees : "free"
}

// insead of every time useing dot operator for assessing  or updating the values we use destructing

const {courseInstructor : Instructor} = course
//     destructing the object and giving a new name to it

// console.log(courseInstructor);
console.log(Instructor);

console.log(course.hasOwnProperty('name')); // true
console.log(course.hasOwnProperty('isLoggedIn')); // False






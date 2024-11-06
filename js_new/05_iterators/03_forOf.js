const myArray = [1,2,3,4,5]



for (const value of myArray) {
    // console.log(value);
    
}

const map = new Map()
map.set('js',"javascript")
map.set('py',"python")
map.set('cpp' , "c++")
map.set('rube',"rube for app")

for (const [key , value ] of map) {
    // console.log(`${key} :- ${value}` );    
}

// map contain key - value pairs of primitive data type
// map are iterable using forOf loop but objects are not iterable using forOf loop
// map have unquie values and remembers in the same order like it is entered
// forOf loop on map returns two values => key and value

const myObject = {
    "js" : "javascript",
    "cpp" : "c++",
    "py" : "python",
    "java" : "java",
    "rube" : "rube"
}


// not iterable 
// for (const value of myObject) {
//     console.log(value);
// }
const myArray = [1 , 2 , 3 , 4 , 5]

for (const value in myArray) {
    // console.log(value); 
}

const myObject = {
    "js" : "javascript",
    "py" : "python",
    "cpp" : "c++",
    "java" : "java",
    "rube" : "rube"
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);  
}

// objects are iterable using forIn loop
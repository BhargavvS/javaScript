const obj = {
    username : "Bhargav",
    printGreeting : function() {
        // console.log(`${this.username} , welcome to this website`);
        // console.log(this); // returns the entire object
        
    }
}

obj.printGreeting() 

obj.username = "kusuma"

obj.printGreeting() 

// console.log(this); //returns a empty object

// the global value of "this" in the browser is "windows"


// +++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++++++

const printName  = (userName) => {
    // console.log(this.userName); // gives an error 
    console.log(userName);
}

printName("bhargav")


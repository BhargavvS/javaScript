const isLoggedIn = true

const number =  2
const temperatue  = 40

if(temperatue <= 40) {
    // console.log("temparature is less than 40");
} else { 
    // console.log("temparature is greater than 40`");
}

// < , <= , > , >= , == , != , === ,  !==\

const score = 200

if(score > 200) {
    console.log("The value is greater than 200");
} else {
    console.log("The value is greater than 200");
}

const percentage = 75

if(percentage >= 90) {
    console.log("extraOrdinary performance");
} else if(percentage < 89 && percentage > 80) {
    console.log("distinction , very good performance");
} else if(percentage<79 && percentage >70 ){
    console.log("good performace Second class");
} else if(percentage <69 && percentage > 60) {
    console.log("First claas performance");
    
} else if(percentage <59 && percentage > 35) {
    console.log("just pass , contragulations");
} else { 
    console.log("you has failed , better luck next time");
}

// logical operators
 // && , || , ! 

 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if(loggedInFromEmail || loggedInFromGoogle) {
    console.log('u have successfully logged in');
 } else {
    console.log("u haven't logged in");
 }

 

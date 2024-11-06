for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(i);
    
}

for (let i = 0; i <=10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("The special number is 5");
    }
    // console.log(i);
}

let myArray = ["hulk", "ironman" ,"thanos" , "caption america"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value is ${i}`);
    
   for (let j = 0; j <= 10; j++) {
    // console.log(`the inner loop value is ${j} and the inner value is ${i}`);
   }
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value is ${i}`);
    
   for (let j = 1; j <= 10; j++) {
    // console.log(`the inner loop value is ${j} and the inner value is ${i}`);
    console.log(`${i} * ${j} = ${i*j}`);
    
   }
    
}

for (let index = 0; index <= 10; index++) {
    const element = index;

    if(element == 5) {
        // console.log("Executed value 5");
        break;     // it comes out of the entire loop whenever it is executed
    }
    // console.log(element);
    
}

for (let index = 0; index <= 10; index++) {
    const element = [index];
    
    if(element == 5 ) {
        // console.log("executed value 5");
        continue     // skips this particular itration and runs every other code
    }
    // console.log(element);
    
}

// LLFE =>  immediately invoked function expression (IIFE)

( function chai() {
    console.log(`excuted`)
} )();

// to immediately call the function automatically as soon as it is executed  and ";" is every imp at the last for the end of the flow control

( (name) => {
    console.log(`executed two ${name}`);
})("Bhargav");


//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//  ; lgana zaroori hai
// Global scope pollution happens when too many variables are declared in the global scope (outside of functions, blocks, or modules). This can lead to naming conflicts, unexpected behavior, and difficulties in debugging
((name)=>{
    console.log(`DB DISCONNECTED TWO ${name}`);
})('nitin')
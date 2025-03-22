function satMyName(){
    console.log("F");
    console.log("A");
    console.log("Z");
    console.log("I");
    console.log("L");
}

// satMyName();

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2) 
// }
function addTwoNumber(num1, num2){
    // let result = num1 + num2; 
    // return result;
    return num1 + num2;
}
const result = addTwoNumber(3,4)
// console.log("Result: ",  result);

function loginUserMessage(username){
    if(username === undefined /*!username*/ ){
        console.log("Please enter a username");
        
    }
    else return`${username} just logged in`
}

console.log(loginUserMessage());
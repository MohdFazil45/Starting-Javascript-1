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

// console.log(loginUserMessage());

/**************************************/
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))
// 
const user = {
    username:"john",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject({
    username:"jane",
    price:299
})
const myNewArray =[200,400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]))

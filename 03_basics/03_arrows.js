const user = {
    username: "john",
    price: 999,

    welcomeMessage:function(){
        console.log(`Welcome ${this.username} to our website.`)
        // console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this.username);
    
// }
// chai();

const chai  = () =>{
    let username = "fazil"
    console.log(this);
       
}
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) =>  num1 + num2;

const addTwo = (num1, num2) =>  (num1 + num2);

console.log(addTwo(3, 4));

const myArray = [1,2,3,4]

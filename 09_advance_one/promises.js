const promiseOne = new Promise(function(resolve, reject){
    //Do an async task 
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

//connection with resolve
promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai",email:'Fazil@google.com'})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
    
})

const promisesFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "Fazil", password:"12345678"})
        } else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promisesFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('The promised is resolved or rejected')
)

const promiseFive  = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "Javascript", password:"1234"})
        } else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response =  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    } 
};
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
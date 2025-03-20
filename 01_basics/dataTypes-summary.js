// Primitive types :-

// 7 types :- String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 982437582735872483n

// Reference types (Non primitive) :-

//Array, Objects, Functions 

const heros = ["shaktimaan", "krish", "bheem"]

let myObj = {
    name: "Fazil",
    age: 20,
    city: "agra",
    hobbies: ["reading", "painting"]
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heros);

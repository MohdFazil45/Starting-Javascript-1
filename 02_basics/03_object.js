// singleton 
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Fazil",
    "full name":"Mohd Fazil",
    age: 20,
    [mySym]: "mykey1",
    city: "aligarh",
    hobbies: ["reading", "painting"],
    isLoggedIn: false,
    lastLoginDays:"Friday",
    email: "myemail@aligarh"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);

// console.log(typeof JsUser[mySym]);

JsUser.email = "aligarh@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "aligarh@yahoo.com";
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello World");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

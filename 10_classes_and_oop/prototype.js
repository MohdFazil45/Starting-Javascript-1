// let myName = "fazil"
// console.log(myName.truelength);


let myHeroes = ["Hulk", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.fazil = function(){
    console.log(`fazil is present in all objects`);
}

Array.prototype.heyFazil = function () {
    console.log(`fazil says hello`);
}

// heroPower.fazil()
myHeroes.fazil()
myHeroes.heyFazil()
// heroPower.heyFazil()

// inheritance

const User = {
    name:"chai",
    email: 'chai@gmail.com'
}

const Teacher = {
    makeVideo: true
}
 
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ =  User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"fazil".trueLength()
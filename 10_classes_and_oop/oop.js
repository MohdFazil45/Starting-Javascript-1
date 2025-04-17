// Object Literals

const user = {
    username: 'Fazil',
    loginCount:4,
    signedIn:true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor Function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Fazil", 5, true)
const userTwo = new User("Fazilious", 8, false)

console.log(userOne.constructor);
console.log(userTwo);

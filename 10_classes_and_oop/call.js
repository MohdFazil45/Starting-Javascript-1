function SetUsername(username) {
    //complex DB call
    this.username = username
}

function createUser(Username, email, password) {
    
    SetUsername.call(this, Username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

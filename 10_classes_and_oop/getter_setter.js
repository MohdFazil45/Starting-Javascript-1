class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}fazil`
    }
    set password(value){
        this._password = value
    }
}

const fazil = new User('fazil@gmail.com','abc')
console.log(fazil.password);
console.log(fazil.email);

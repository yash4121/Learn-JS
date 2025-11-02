class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
        this._email = email;
    }
}

const yash = new User("yash@gmail.com","abc")
console.log(yash.password)
console.log(yash.email)
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const user = new User("yash")
console.log(user.createId())
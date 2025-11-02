function setUserName(username){
    this.username = username
    console.log('called')
}

function createUser(username,email,password){
    //setUserName(username) //we only gave reference not call, after it retur4ns it's execution context is vanished hence we will not get the username
    setUserName.call(this,username) //{ username: 'yash', email: 'yash@gmail.com', password: 123 }
    this.email=email
    this.password = password
}

const user = new createUser("yash",'yash@gmail.com',123)
console.log(user) //{ email: 'yash@gmail.com', password: 123 }
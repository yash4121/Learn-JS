// const user = {
//     username: "yash",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(this)
        
//     }
    
// }

// console.log(user.username)
// console.log(user.getUserDetails())

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("yash",12,true)
const userTwo = new User("okok",2,false)

userTwo.username = "koko"
console.log(userOne.constructor)
//console.log(userTwo)
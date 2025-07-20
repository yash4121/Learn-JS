const user = {
    username: "yash",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
//user.welcomeMessage() //yash, welcome to website
// user.username="Sam"
// user.welcomeMessage() //Sam, welcome to website
//onsole.log(this) // {}
//inside browser this will give window object becuase global object is window

// function myFun(){
//     const username = "yash"
//     // console.log(this) //global object
//     console.log(this.username) //undefined
// }
// myFun()
// let user1
// console.log(user1)

// const myFun = function() {
//     let username = "yash"
//     // console.log(this) //global objects
//     console.log(this.username) //undefined
// }
// myFun()
// const myFun = () => {
//     let username = "Yash"
//     // console.log(this) //empty object
//     console.log(this.username) //undefined
// }
// myFun()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(1,2))
// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(1,2)) //3

const addTwo = (num1,num2) => ( num1+num2 )
console.log(addTwo(1,2)) //3
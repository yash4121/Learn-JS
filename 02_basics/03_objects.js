//Singleton thorought single instance i.e Object.create

//object literals
// const mySym = Symbol("key1") //wrong way
const mySym = Symbol("key1")

const myObj = {
    name: "Yash",
    age: 22,
    [mySym]: "mykey1",
    // mySym: 'mykey1', //this is not the correct way of using the symbol
    "fullName": "Yash y", //can only access this through square brackets
    email: "yash@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(myObj.name) //Yash
// console.log(myObj["fullName"])
// // console.log(typeof myObj.mySym) //string worng way
// console.log(myObj[mySym])
// console.log(typeof myObj[mySym])

// Object.freeze(myObj) //freeze the object
// myObj.email = "yash@google.com"
// console.log(myObj)
myObj.greeting = function(){
    console.log("Hello world")
}
myObj.greetingTwo = function(){
    console.log(`Hello user ${this.name}`)
}
console.log(myObj.greeting()) //Hello world
console.log(myObj.greetingTwo()) //Hello user Yash
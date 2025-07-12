// on the basis of how data is stored and accessed it is divided into primitive and non-primitive datatypes
//Primitives

// number, String, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123')
const Id2 = Symbol('123') //Symbol is used to store unique id
console.table([Id, Id2]) //not equal

const bigNumber = 21234535653646767632443n

// Non Primitives

// Array, Object, Functions

// const names = ["Ram", "Sham"]
// console.log(names[0]) //Ram
// const obj = {
//     "name": "Ram",
//     "age": 23
// }
// console.log(obj["name"]) //Ram
// const myfunc = function() {
//     console.log("hi there")
// }
// myfunc() //hi there

//************************************ */
// Stack and Heap in JS
// primitive datatype uses stack - gives copy
let name = "Ram"
let anotherName = name
anotherName = "Aryan"
console.log(name)
console.log(anotherName)

// non primitive datatype uses heap - gives reference
let obj = {
    email: "user@gmail.com",
    age: 23
}
let newObj = obj
newObj.email = "user1@gmail.com"
console.log(obj.email)
console.log(newObj.email)
// let a = 10
// const b = 20
// var c = 30
// console.log(a) //10
// console.log(b) //20
// console.log(c) //30
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a) //block scope will give error
// console.log(b) //block scope will give error
// console.log(c) //global scope 30

// let a = 300
// if(true){
//     let a = 30
//     console.log(a) //30
// }
// console.log(a) //300

// function one(){
//     const username = "yash"

//     function two(){
//         const website = "---"
//         console.log(username)
//     }
//     //console.log(website) //error

//     two()
// }
// one()

if(true){
    const username = "yash"

    if(username === "yash") {
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

// +++++++++++++++++++ interesting ++++++++++
console.log(addone(5)) //6
function addone(num){
    return num+1
}
// console.log(addone(5)) //6
console.log(addtwo(5)) //initialization error
const addtwo = function(num){
    return num+2
}
// console.log(addtwo(5)) //7
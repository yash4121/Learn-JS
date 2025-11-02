// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hello There!")
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed!")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Yash", email: "yash@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     let error = false;
//     if(!error){
//         resolve({username: "Yash", email: "yash@gmail.com"})
//     } else{
//         reject("Something went wrong!")
//     }
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("Finally")
// })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Yash", email: "yash@gmail.com"})
        } else{
            reject("Something went wrong")
        }
        
    },1000)
})

// promiseFive.then((user) => {
//     console.log(user)
// }).catch((err) => {
//     console.log(err)
// })

// async function handleUser(){
//     try {
//         const p5 = await promiseFive
//         console.log(p5)
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// handleUser()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    

}
getAllUsers()



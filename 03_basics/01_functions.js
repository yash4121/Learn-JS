function myFunc(name) {
    console.log(`Hi ${name}`)
}
myFunc("YASH")
function add(num1,num2){
    console.log(num1+num2)
    return num1+num2
}
result = add(1,2)
console.log(result)
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage("Sam"))
// we don't no how many parameters does the user will pass
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,400,500)) //[ 200, 400, 500 ]
const user = {
    username: "Yash",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
}
console.log(handleObject(user))
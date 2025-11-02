// let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const course = {
    name: "DSA",
    price: 400,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(course,"name"))
Object.defineProperty(course,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(course,"name"))

for (let [key,value] of Object.entries(course)) {
    console.log(key)
} //price isAvailable

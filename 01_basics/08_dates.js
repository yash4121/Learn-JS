const myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //Sat Jul 12 2025 20:22:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Sat Jul 12 2025
console.log(myDate.toLocaleString()) //7/12/2025, 8:22:48 PM

// let myCreatedDate = new Date(2023, 0, 14) //Sat Jan 14 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
let myCreatedDate = new Date(2023, 0, 14, 5 , 8)
console.log(myCreatedDate.toLocaleString()) //1/14/2023, 5:08:00 AM
let myCreatedDate2 = new Date('2024-12-01')
console.log(myCreatedDate)
let myTimeStamp = Date.now()
console.log(myTimeStamp)
const newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}))

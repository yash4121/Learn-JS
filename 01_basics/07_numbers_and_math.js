const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)
// console.log(balance.toString()) //100 string
console.log(balance.toFixed(2)) //100.00 The number of digits to appear after the decimal point
const balance2 = 100.25
console.log(balance2.toPrecision(3))
const balance3 = 1000000000
console.log(balance3.toLocaleString())

//************************** */
console.log(Math.abs(-2)) //2
console.log(Math.round(4.55)) //5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.3)) //4
 console.log(Math.min(2,3,4,5))
 console.log(Math.max(2,3,4,5))
 console.log(Math.random())
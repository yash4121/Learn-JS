// const myArr = [1,2,3,4,5]
// for (const num of myArr) {
//     console.log(num) //1,2,3,4,5
// }
// const name = "Yash";
// for (const letter of name) {
//     console.log(letter) //Y,a,s,h
// }

//Maps 
const map = new Map()
map.set('1','a');
map.set('2','b');
map.set('3','c');
map.set('4','d');
console.log(map)
for (const key of map) {
    console.log(key) //prints whole map
}
for (const [key,value] of map) {
    console.log(key) //prints only keys
}
// const myObj = {
//     1: "Y",
//     2: "A"

// }
// for (const key of myObj){
//     console.log(key) //not iteratable
// }
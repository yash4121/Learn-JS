const marvel_heroes = ["Spiderman", "Batman", "Thor"]
const dc_heroes = ["Ironman", "flash", "Superman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) //[ 'Spiderman', 'Batman', 'Thor', [ 'Ironman', 'flash', 'Superman' ] ]
// console.log(marvel_heroes.concat(dc_heroes)) //[ 'Spiderman', 'Batman', 'Thor', 'Ironman', 'flash', 'Superman' ]
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //if I want all in one array
const modified_array = another_array.flat(Infinity)
console.log(modified_array) //1, 2, 3, 4, 5,6, 7, 6, 7, 4,5
console.log(Array.isArray("Yash")) //false
console.log(Array.from("Yash")) //[ 'Y', 'a', 's', 'h' ]
console.log(Array.of(100,200,300)) //[ 100, 200, 300 ]
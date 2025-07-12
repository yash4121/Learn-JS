let name = "Elon"
let surName = "Musk"
//method1
console.log(name + " " + surName)
//method 2 
console.log(`Hello ${name} ${surName}`)
const newName = new String('yash') //type Object String {'yash'}0: "y"1: "a"2: "s"3: "h"length: 4[[Prototype]]: Stringanchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "yash"
console.log(newName[0]) //y
console.log(newName.length) //4
console.log(newName.toUpperCase()) //YASH, returns new string and does not changes old string as string are immutable in js
console.log(newName.charAt(3)) //h
console.log(newName.charAt(5)) //''
console.log(newName.charAt('5')) //''
console.log(newName.charAt(null)) //y
console.log(newName.charAt(undefined)) //y


// const a = String.prototype.toUpperCase.call({
//     toString() {
//         return "abcdef"
//     }
// })
// const b = String.prototype.toUpperCase.call(true);
// console.log(a,b)
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const firstIndex = paragraph.indexOf('dog')
// console.log(paragraph.indexOf('dog')) //15
// console.log(paragraph.indexOf('dogs')) //-1
// console.log(paragraph.indexOf('R')) //8
// console.log(paragraph.indexOf('r')) //26
// console.log(paragraph.indexOf('dog',firstIndex+1)) //38
// console.log(paragraph.indexOf(null)) //-1
// console.log(paragraph.indexOf('undefined')) //-1
// console.log("hello world".indexOf("")) // returns 0
// console.log("hello world".indexOf("",3))
// console.log("hello world".indexOf("",8))
// console.log("hello world".indexOf("",11)) //11 -> string length
// console.log("hello world".indexOf("",12))
// console.log("Blue Whale".indexOf("blue")); // returns -1 case sensitive
const str = "Mozilla";

console.log(str.substring(1, 3));  //oz indexStart and indexEnd-1
console.log(str.substring(1)); //ozilla
console.log(str.substring(1, 1)) //""
console.log(str.substring(3,1))//oz
console.log(str.substring(1, 10)) //ozilla
console.log(str.substring(10, 11))//""
console.log(str.substring(-1, -2))

console.log("Yash".charCodeAt(2)) //115
console.log("Yash".charCodeAt(-1)) //Nan
console.log("Yash".charCodeAt(6)) //Nan
console.log("Yash".charCodeAt(null)) //89 char at 0

//concat
console.log("ok".concat(" Nice, ", "Work", " Man")) //ok Nice, Work Man
console.log("ok".concat(null, 1, " Man")) //oknull1 Man






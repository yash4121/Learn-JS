// function mul(num){
//     return num*5;
// }

// mul.power = 2

// console.log(mul(5));
// console.log(mul.power);
// console.log(mul.prototype);

// function createUser(username,score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }

// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`)
// }

// const chai = new createUser("chai",25)
// const tea = createUser("tea",200)

// chai.printMe()


// let myName = "yash.   "
// let type = "chai.  "

// console.log(myName.trueLength());


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.yash = function(){
    console.log(`yash is ${this.spiderman}`);
    

}
Array.prototype.heyYash = function(){
    console.log(`Yash says Hello`);
    
}

// heroPower.yash()
// myHeroes.yash()
myHeroes.heyYash()
heroPower.heyYash()


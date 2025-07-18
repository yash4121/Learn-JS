//const patient = new Object()
const patient = {}
patient.id = "1234"
patient.name = "Sam"
// console.log(patient)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "alton"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3)
const obj3 = {...obj1,...obj2}
console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(patient)
console.log(Object.keys(patient)) //[ 'id', 'name' ]
console.log(Object.values(patient)) //[ '1234', 'Sam' ]
console.log(Object.entries(patient)) //[ [ 'id', '1234' ], [ 'name', 'Sam' ] ]
console.log(patient.hasOwnProperty('name')) //true



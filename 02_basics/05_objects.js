const student = {
    name: "john",
    email: "john@gmail.com",
    degree: "CSE"
}
console.log(student.degree)
const {degree} = student
console.log(degree)
const {degree: deg} = student
console.log(deg)
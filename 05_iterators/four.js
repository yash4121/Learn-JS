const myObj = {
    js: 'Javascript',
    cpp: 'c++',
    py: 'Python'
}
for (const key in myObj) {
    console.log(key) //js,cpp,py 
}
for (const key in myObj) {
    console.log(myObj[key]) //js,cpp,py 
}

const myArr = [2,3,4,5];
for (const num in myArr) {
    console.log(num) //0,1,2,3 -> keys
}
//for in loops is not iteratable for maps
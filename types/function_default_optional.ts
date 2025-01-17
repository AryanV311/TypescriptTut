

//! Error
// const greet = (str:string, id:number):String => {
//     return `welcome, ${str} your id is ${id}`
// }

// const emp = greet("typeScript")
// console.log(emp);

//? now here we pass a default value

const greet = (str:string, id:number = 1):String => {
    return `welcome, ${str} your id is ${id}`
}

const emp = greet("typeScript")
// console.log(emp);

//? Optional parameters are denoted by appending a ? symbol after the parameter

const greet2 = (str:string, id?:number) => {
    if(id){
        return `welcome, ${str} your id id ${id}`
    }

    return `welcome, ${str}`
}

// const emp2 = greet2("javascript")
const emp2 = greet2("java", 34)
console.log(emp2);
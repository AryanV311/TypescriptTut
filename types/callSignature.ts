//? TypeScript call signatures define objects that can be invoked like functions but also have properties. They specify the parameters and return type for the function-like behavior. They can include additional properties, enabling the creation of versatile, callable objects that act as both functions and data containers.

type Student = {
    name:string,
    age:number,
    gender?:string,
    greet: (country:string) => string  // method call signature
}

const students:Student = {
    name:"rohan",
    age:22,
    greet:(country):string =>  `my name is ${students.name}, I am ${students.age} year old & I am from ${country}`
}

console.log(students.greet("India"));
//? A union in TypeScript allows you to define a variable or parameter that can hold multiple types. It is created using the | (pipe) operator.

type inputValue = string | number | boolean

const differentUserInput = (unknownInput:inputValue) => {
    if (typeof unknownInput == "string"){
        return unknownInput.toUpperCase()
    } else if(typeof unknownInput == "number"){
        return unknownInput * 2
    }
}

console.log(differentUserInput("hello Javscript"));
console.log(differentUserInput(2334));

//*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newInputValue = (value :inputValue) => {
    if(typeof value === "string"){
        return value[0].toUpperCase() + value.slice(1)
    } else if(typeof value === "number"){
        return "$"+value
    } 

    return value === true ? "yes":"no"
}

// console.log(newInputValue("hello typescript"));
// console.log(newInputValue(20));
// console.log(newInputValue(true));
// console.log(newInputValue(false));


type PersonP = {
    name : string,
    age:number
}

type Employee = {
    emp_id:number,
    emp_department:string
}

type EmployeeDetails = PersonP | Employee     

//^ here in Union we write only one detail of Employee, but we have to write full details of either on object
const employee:EmployeeDetails = {
    name:"aryan",
    age:23,
    emp_id:12
}



console.log(employee);


//? Intersection 

type EmployeeDetails1 = PersonP & Employee

//^ its totally opposite to the union, we have to write both object details or either it will give error
//^Here i write all the details that are in type
const employee2:EmployeeDetails1 = {
    name:"javascript",
    age:22,
    emp_id:12,
    emp_department:"IT"
}

console.log(employee2);


//*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

type User = {
    name:string,
    age:number
}

type MyLocation = {
    city:string,
    country:string
}

const user:User ={name:"typescript", age:34}
const myLocation:MyLocation={city:"thane", country:"INDIA"}

const userProfile = (user:User, location:MyLocation) => {
    // return `My name is ${user.name} and living in ${location.city}`
    return{...user, ...location}
}

// console.log(userProfile(user,myLocation));

//^Now getting both data in object

const copleteUserProfile: User & MyLocation = userProfile(user,myLocation)
console.log(copleteUserProfile);
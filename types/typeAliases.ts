//? In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type,making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction Of complex types

type Person = {
    name:string,
    age:number,
    isStudent:boolean,
    address:{city:string,country:string}
}

const student:Person = {
    name:"ganesh",
    age:26,
    isStudent:true,
    address:{
        city:"kalyan",
        country:"INDIA"
    }
}

// console.log(student);

const student2:Person = {
    name:"roshan",
    age:23,
    isStudent:true,
    address:{
        city:"mumbai",
        country:"INDIA"
    }
}

// console.log(student2);

type Products = {
    name:string,
    price:number,
    quantity:number
}

const product1:Products = {
    name:"laptop",
    price:1200,
    quantity:5
}

// console.log(product1);

//? now lets calculate total price

const calculateTotalprice = (product1:Products) => {
    return ` Total price of ${product1.name} is ${product1.price * product1.quantity}`
}

console.log(calculateTotalprice(product1))


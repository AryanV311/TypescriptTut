//? In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.


interface Productss {
    name:string,
    quantity:number,
    price:number
}

const item:Productss ={
    name:"Hp-laptop",
    quantity:5,
    price:3200
}

const calculateTotalPrice =(item:Productss) =>{
    const { name, quantity, price} = item;
    return `${name} price is ${price} and total price of ${quantity} ${name} is:${quantity * price}`
}

console.log(calculateTotalPrice(item))
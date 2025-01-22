//? generics are a way to create reusable components or functions that work with a variety of types, while maintaining type safety. Generics enable you to define a placeholder for a type that will be specified when the function, class, or interface is used.


// function checkType(value:string | number | boolean){
//     return `value is : ${value} and type is ${typeof value}`
// }

// console.log(checkType(42))
// console.log(checkType("hello typescript"))
// console.log(checkType(true))

//? now using generics, where we can handle multpile type dynamically

// function typeChecking<T>(value:T):string {
//     return `value is:${value} and type is:${typeof value}`
// }

// console.log(typeChecking<number>(42));
// console.log(typeChecking<string>("hello generics"));
// console.log(typeChecking<boolean>(false));

//!The + operator is not valid for all types in TypeScript. It's only defined for types that support concatenation (like string) or arithmetic operations (like number). thts why We can add constraints to ensure that the + operator is only applied to types that support it (number or string).

// function add<T extends number | string>(a:T, b:T):T {
//     return (a + b) as T;
// }

// console.log(add<number>(4,6));
// console.log(add<string>("java","script"));

function add<T, U>(a:T, b:U){
    return a + b
}

console.log(add<number,number>(55, 10))
console.log(add<number,string>(5,"javascript"))
//? to overcome this issue we use method overloading 

// function addd(a:number, b:number):number;
// function addd(a:string, b:string):string;
// function addd(a:number | string, b:number | string):number | string{
//     return a + b
// } 

// console.log(addd(56,56));
// console.log(addd("hello","Script"));


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

// function add<T extends number | string>(a:T, b:T):T {
//     return (a + b) as T;
// }

// console.log(add<number>(4,6));
// console.log(add<string>("java","script"));

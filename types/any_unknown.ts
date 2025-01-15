//? When a variable is of type unknown, TypeScript makes you check the type before you can use that variable. This makes developers clearly state their assumptions, which helps to avoid errors when the code is running.

let num2:unknown;

num2 = 5
num2 = true;

if(typeof num2 === "number"){
    console.log(num2 + 5)
} else if(typeof num2 === "boolean"){
    console.log(num2)
}

function processData(data: unknown): string {
    if (typeof data === 'string') {
      return data.toUpperCase();
    } else {
      return "Invalid data";
    }
  }

const result1 = processData("Hello, TypeScript!");
const result2 = processData(2);  // Invalid Data
// console.log(result2)

//?On the other hand, any is the most easy-going type in TypeScript. It skips type checking, letting variables of this type to be set to anything without making the code fail to compile. While this freedom can be handy, it means you lose the advantages of static typing.

function processDynamicData(data: any): string {
    return data.toUpperCase(); 
}

const result3 = processDynamicData("Hello, TypeScript!"); 
const result4 = processDynamicData(77); 
console.log(result4);

let strr:any;

strr = "string"
strr = 34



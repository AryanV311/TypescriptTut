let myFavnumber:number = 5;
let myAge:number = 21;
let pi:number = 3.147;
let myNegval:number = -34;

// let individualresult:number = myAge + "Aryan"
// console.log(individualresult);

// let invalidValue:number = "123"
// console.log(invalidValue);

// let computedValue:number = Math.sqrt(16)
// console.log(computedValue);

let nanValue:number = NaN
// console.log(nanValue);


//* -------------------
//* String
//* -------------------

let myFirstString:String = "typescript"

//* concatinating string

let myFirstName:String = "aryan"
let mySecondName:string = " Vishwakarma"

let fullName:String = myFirstName + " " + mySecondName
// console.log(fullName);


//* Converting to UpperCase and LowerCase

let text:String = "Learning Javascript And TypeScript"

let upperText:String = text.toUpperCase()
// console.log(upperText);

let lowerText:String = text.toLowerCase()
// console.log(lowerText);

//* substring

let str:String = "typescript is subset of javascript"
let slicePart:String = str.slice(4,9)
let subPart:String = str.substring(1,16)


// console.log(slicePart);
// console.log(subPart);

//* comparing Strings

let str1:String = "javascript"
let str2:String = "typescript"

// storing result as boolean
let result:boolean = str1 == str2
console.log(result);

let product:String = "typeScript Course"
let price:number = 343

console.log(`the price of ${product} is ${price}`);
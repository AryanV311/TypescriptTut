
let isDone:boolean = true;
let isCorect:boolean = false;


//* check isEven and return type boolean
function isEven(a:number):boolean{
    return a % 2 === 0
}

console.log(isEven(4))

//* isDivisibleBy4And8
function isDivisibleby4an8(x:number):boolean{
    return x % 4 === 0 && x % 8 === 0
}

console.log(isDivisibleby4an8(52))


//* BigInt

const bigNumber:bigint = 90076677666229870n
console.log(bigNumber);

const anotherBigNumber = BigInt(900766377629878)

let difference = bigNumber - anotherBigNumber
console.log("difference:", difference);

let multiple = bigNumber * anotherBigNumber
console.log("multiple:", multiple);

let divisible = bigNumber / anotherBigNumber
console.log("divisible:", divisible);
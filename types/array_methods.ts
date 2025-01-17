
const fruits:string[] = ["fruits","banana","kiwi","apple"]
fruits.push("arpit")
// console.log(fruits);

// const popElement = fruits.pop() // return pop element
// console.log(popElement);
// console.log(fruits);


// const shiftElement = fruits.shift()  // retun first element 
// console.log("shiftElement",shiftElement);
// console.log(fruits);  // after shift remaining data will return

// traversing through item and return tyat item
// fruits.forEach((item) => {
//     console.log(item);
// })

//? Sorting with length
const sortingarray = (sortName:string[]) => {
    const compare = (a:string,b:string) => a.length - b.length

    return sortName.sort(compare)
}

const sortName:string[] = ["harsh","roshan","harshal","omkar","arpit"]
let checkSort = sortingarray(sortName)

// console.log(checkSort);

//? sorting an array in ascending order(smaller to greater)
const number:number[] = [1,22,45,35,334,98,78,645,452]

const compare = (a:number, b:number):number => {
    return a - b
}

number.sort(compare)
// console.log(number);

/* The map method creates a new array by applying a provided function to each element of the original array. It transforms
ach element and returns a new array with the transformed values. */

//? Doubling a number of an array

const doubleNumber:number[] = [1,2,3,4,5,6]

// doubleNumber.map((currValue) => {
//     console.log(currValue * 2)
// })

//? converting array to string

const numberToString = doubleNumber.map((currVal) => {
   return currVal.toString()
})

// console.log(numberToString);

//? filtering even Number

const evenNumber:number[] = doubleNumber.filter((evenNum:number) => {
    return evenNum % 2 === 0
} )

// console.log(evenNumber);

//? checkling greater the value

const greaterNumber:number[] = doubleNumber.filter((elem:number) => {
    return elem > 3
})

// console.log(greaterNumber);

//? converting to an uppercase

const lowerNames:string[] = ["harshita","harshal","roshan","omkar"]

const convertUpperNames:string[] = lowerNames.map(((curElem:string) => {
    return curElem.toUpperCase()
}))

// console.log(convertUpperNames);

//? square of number

const squareNumber:number[] = doubleNumber.map((currElem:number) => {
    return currElem * currElem
})

// console.log(squareNumber);

//? filtering the string gretaer than 5

const greaterStringThanfive = lowerNames.filter((str) => {
    return str.length > 5
})

console.log(greaterStringThanfive);
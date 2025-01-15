function info(course:string,id:number){
    console.log(`the id of ${course} is ${id}`)
}

info("typescript",3)


//* checking palindrome

const isPalindrome = (str:string):boolean => {
    let myPalin = str.split("").reverse().join("")
    return myPalin === str
}

const check = isPalindrome("levelw")
console.log(check);

//* Calculate average of an array of number
const calculateAverage = (num:number[]):number => {
    let total = num.reduce((acc, curr) => {
        return acc + curr
    },0)

   let average = total/num.length
   return average
}

let avg = calculateAverage([2,4,6,3,8])
console.log(avg);


//* find Max Value
const findMaxValue = (max:number[]):number => {
    if(max.length === 0 ){
        throw new Error("array cannot be empty")
    }

    return Math.max(...max)
}

let max = findMaxValue([23,8,11,22,33])
console.log(max);
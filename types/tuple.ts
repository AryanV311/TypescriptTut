//? In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.4

type PersonInfo = readonly[string,number,boolean]

const displayPersonInfo =(person:PersonInfo) => {
    const [name, age, hasCourseLicense] = person;

    return `Name:${name}, Age:${age}, Course License:${hasCourseLicense ? "yes":"No"}`
}

const detaile1:PersonInfo = ["typescript",29,true]
console.log(displayPersonInfo(detaile1))

// detaile1.push("challenge")  //! it will create a problem, it will add element in define structure tuple, so thats why we use readonly method to cover this issue, || uncomment to check there is error occur after apply readonly method to the tuple
// console.log(detaile1);

//*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

type ProductInfo =readonly[string,number,number]

const productDetails:ProductInfo = ["Hp-Laptop",60000,4]

const displayProductInfo = (product:ProductInfo) => {
    const [name, price, quantity] = product
    return `${name} price is ${price} and product quantity is ${quantity}`
}

console.log(displayProductInfo(productDetails));

//*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

type SubjectGrade = [subject:string, grade:number]


const studentGrade:SubjectGrade[] = [["English",87],["Math",90],["science",95]]

const displayStudentGrade = (students:SubjectGrade[]) => {
  const details = students.map(([subject, grade]) => `subject:${subject} Grade:${grade}`).join(", ")
  const totalGrade = students.reduce((sum,[, grade]) => sum + grade ,0)
  let totalAverage = totalGrade / students.length
  return `details:${details} and AverageGrade:${totalAverage}`
}

// console.log(displayStudentGrade(studentGrade))


//* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

type WheatherDetails = [city:string,temperature:number,condition:string]

const wheatherReport:WheatherDetails[] = [['thane',343,"windy"],['mumbai',222,"cloudy"],["pune",121,"rainy"]]

const displayWhetherReport = (whether:WheatherDetails[])=> {
    let report = whether.map(([city,temperature,condition]) => `In City:${city} temperatur is:${temperature}°C and condition is:${condition}`).join(", ")

    return `Wheather Rport: ${report}`
}

console.log(displayWhetherReport(wheatherReport));
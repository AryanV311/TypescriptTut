

const person = {
    name:"akki",
    age:24,
    istudent:true,
    address:{
        city:"thane",
        country:"INDIA"
    }
}

// console.log(person);

person.address.city = "Mumbai"  // now city change from thane to Mumbai
// console.log(person);

//? suppose if i try to change city = 123, it will not change, but in javascript it will be change

//person.address.city = 123  //! im getting error here: Type 'number' is not assignable to type 'string

//? we can also define objecj like :

const person1:{
    name:string,
    age:number,
    isStudent:boolean,
    address:{city:string,country:string}
} = {
    name:"rohit",
    age:27,
    isStudent:false,
    address:{
        city:"mumbai",
        country:"INDIA"
    }
}

console.log(person1);
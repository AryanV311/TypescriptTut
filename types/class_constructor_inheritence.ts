//? A TypeScript class is a blueprint for creating objects, encapsulating properties (data) and methods (behavior) to promote organization, reusability, and readability.

// class Persons {
//     name:string = "aryan";
//     age:number = 21;
//     isstudent:boolean = false;
//     hobbies:string[] = ["cricket","sketching","reading"]
// }

// const persons1 = new Persons()
// console.log(persons1);

//? now if i have to pass directlty in Object like this Person("user",23,true,["","",""]) so we have to create constructor for this,


class Persons {
    name:string;
    age:number;
    isStudent:boolean;
    hobbies:string[]

    constructor(name:string, age:number,isStudent:boolean,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.hobbies = hobbies;
    }

    introduce(): string{
        return  `Hi , I am ${this.name} and I'm ${this.age} year old. I love ${this.hobbies.join(", ")}`
    }
}

//^The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.


class Students extends Persons {
    garde:number;
    constructor(name:string, age:number,isStudent:boolean,hobbies:string[],grade:number){
        super(name,age,isStudent,hobbies)
        this.garde = grade;
    }

    introduce(): string {
        return `${super.introduce()} and I'm in grade ${this.garde}`
    }
}

const persons2 = new Persons("typescript",28,false, ["logicBuilding","reading","coding"])
const person3 = new Persons("akash",21,true,["writing","conding","singing"])
const students1 = new Students("rahul",23,true,["reading","coding"],12)
// console.log(persons2);
// console.log(person3.introduce());
console.log(students1.introduce());
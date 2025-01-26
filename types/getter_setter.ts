//? this is also the shorthand mthod to write the constructor

class Personss {
    constructor(public name:string, public age:number, public isStudent:boolean, public hobbies:string[]){
        if(age > 120 || age < 0){
            throw new Error("Age is not valid")
        }
     }

    introduce(): string{
        return  `Hi , I am ${this.name} and I'm ${this.age} year old. I love ${this.hobbies.join(", ")}`
    }
}


const personObj = new Personss("aryan",21,true,["coding","dancing","singing"])
console.log(personObj);

//? now my age is public so i can acces it directly, and i have put some validation on age 

const personObj1  =  new Personss("aakash",22,true,["reading","studying"])
console.log(personObj1);  //! now im gettting here error Age is not valid, becoz of validations

//? now if update the age

personObj.age = 512  //^ now here that valdation is not work, becoz this is not calling costructor it directly update the age value, so thats why we use setter method 
console.log(personObj.introduce());


//? Now we use SETTER and GETTER methods

class PersonDetails {
    private _age:number;
    constructor(public name:string, public hobbies:string[]){ }

    public set setAge(age:number){
        if(age > 120 || age < 0){
            throw new Error("Age is not valid")
        }

        this._age = age
    }

    public get setAge(){
        if(this._age === undefined){
            throw new Error("Age is not defined")
        }
            
    return this._age
    }

    introduce(): string{
        return `Hello I'm ${this.name} and i'm ${this._age}. My hobbies is ${this.hobbies.join(",")}`
    }

    
}

const detail1 = new PersonDetails("aryan",["dancing","singing"])
detail1.setAge = 34;
console.log(detail1.introduce());
console.log(detail1.setAge); //? by using get then i can directly acces the age, wihtout get method age cannot be directly access


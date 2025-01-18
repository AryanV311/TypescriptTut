//?Enums stands for Enumerations. Enums are a new data type supported in TypeScript. It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums. We can define the enums by using the enum keyword.

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name:string,
    email:string,
    password:string,
    role: Roles
}

const user1:LoginDetails = {
    name:"user1",
    email:"user1@gmail.com",
    password:"user11",
    role:Roles.admin
}

const user2:LoginDetails = {
    name:"user2",
    email:"user2gmail.com",
    password:"user22",
    role:Roles.user
}

const isAdmin = (user:LoginDetails) => {
    const {name, role} = user;
    return role === "admin" ? `${name} is allow to edit website` : `${name} is not allow to edit website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
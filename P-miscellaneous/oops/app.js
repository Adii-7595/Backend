// OOP : object oriented programming

// prototypes, New operator constructor classes keywords(extends,super)


// object prototypes : prototypes are the mechanism by which js inherit features from one another.
// it is like a single template object that all objects inherit methods and properties from without
// having their own copy

// arr.__proto__(reference)
// Array.prototype(actual object)
// string.prototype

// Every obj in js has a built-in property,which is called its prototypes.
// the prototype is itself an object, so the prototype will have its own prototype that has
// null for its own prototypes


let arr = [1, 2, 3]
arr.sayHello = () => {
    console.log("hello,I'm arr")
}

// Factory Functions : A function that create objects

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`hii my name is : ${this.name}`);
        },
    }
    return person;

};

let p1 = personMaker("aditya", 23)//new copy
//hence it is inefficient as redundancy happens.
let p2 = personMaker("aditya", 23)//new copy 


//New Operator: the new operator , developers create an instance of a user-defined object type
//  or of one of the built-in object types that has a constructor function
// constructor function: a convention to follow as:
// it doesn't return anything and start with capital letter.
// it's not mandatory but best ethic to follow the convention
function Person(name, age) {
    this.name = name;
    this.age = age;

};

Person.prototype.talk = function () {
    console.log(`my name is ${this.name}`)

};

let p3 = new Person("aditya", 23)
let p4 = new Person("sona", 23)



//  Classes : classes are templating for creating object
// The constructor method is a special method of a class 
// for creating and initializing an object of that class.

class Aditya {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, my name is ${this.name}`);
    }
}
let p5 = new Aditya("aditya",23)
let p6 = new Aditya("sona",23)


//Inheritance: it is a mechanism that allows us to create new classes om the basis
// of already existing class 

class Common{
    constructor(name,age,branch){
        this.name = name;
        this.age = age;
        this.branch = branch;

    }
    talk(){
        console.log(`hi,my info is ${this.name}`)

    }
}

class Student extends Common{
    constructor(name,age,marks,branch){
        super(name,age,branch)
        this.marks = marks
        
    }

}


class Teacher extends Common{
    constructor(name,age,branch,subject){
        super(name,age,branch);
        this.subject = subject;
    }
}


let s1 = new Student("Aditya",23,90,'CSE')
let t1 = new Teacher("Aditya",23,'CSE','DSA')


class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";

    }
    eat(){
        console.log("I'm eating!")
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name)
    }
    bark(){
        console.log("wooff...")
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name)
    }
    meow(){
        console.log("meow...")
    }
}

let pet1 = new Cat("johny")
let pet2 = new Dog("moti")
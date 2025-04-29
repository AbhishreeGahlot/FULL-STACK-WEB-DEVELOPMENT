// factory function fails 
// -: generates copy for each instance 

// new + constructor
// function Person(name,age) //constructor
// {
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.talk = function ()    // now the function is in prototype object 
// {
//     console.log(`I am  ${this.name}`);
// }
// let p1 = new Person("Adam" , 19);


// class 
class Person  {
    constructor(name , age)
    {
        this.name = name ;
        this.age = age;
    }

    talk()
    {
        console.log(`I am  ${this.name}`);
    }
}
//objects 
let p1 = new Person("Adam" , 19);
let p2 = new Person("Eve" , 9);

// inheritance 
class Student extends Person{ // inheriting properties from Person class
    constructor(name , age)
    {
        super(name,age); //parent class constructor is being called
    }

    introduction()
    {   
        console.log(`I am  ${this.name}`);
    }
}

let s1 = new Student("Jinu" ,20);

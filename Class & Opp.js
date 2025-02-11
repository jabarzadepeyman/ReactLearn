// هر کلاس یه بخش داره
// constructor
// Properties
// Methods


// this is class
class npc {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Methods
    seyHello() {
        console.log(`Hello ${this.name}!`);
    }
}

const men1 = new npc('peyman', 24);
console.log(men1);

// تمرین اول

class animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makesoud(){
       return `${this.name} (${this.species}) seys: ${this.sound}`
    }
}

const animal1 = new animal('Buddy','Dog','woof');
console.log(animal1.makesoud());

// تمرین دوم

class Employee  {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
    showInfo(){
        console.log(`${this.name} Ali has a Salary of ${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name,salary,department) {
        super(name,salary); // این یعنی این هارو از قبل بیار
        this.department = department;
    }
    manage(){
        console.log(`${this.name} is managing the ${this.department} department`);
    }
}

const Manager1 = new Manager('peyman',30,'IT')
Manager1.manage();
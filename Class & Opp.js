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

    makesoud() {
        return `${this.name} (${this.species}) seys: ${this.sound}`
    }
}

const animal1 = new animal('Buddy', 'Dog', 'woof');
console.log(animal1.makesoud());

// تمرین دوم

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showInfo() {
        console.log(`${this.name} Ali has a Salary of ${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // این یعنی این هارو از قبل بیار
        this.department = department;
    }

    manage() {
        console.log(`${this.name} is managing the ${this.department} department`);
    }
}

const Manager1 = new Manager('peyman', 30, 'IT')
Manager1.manage();

// تمرین دوم

class Device {
    constructor(brand) {
        this.brand = brand;
        this.powerStatus = false;
    }

    togglePower() {
        this.powerStatus = !this.powerStatus; // به همین راحتی برعکسش  کردیم
        console.log(`${this.brand} is now ${this.powerStatus ? "ON" : "OFF"}`);
    }
}

class Phone extends Device {
    constructor(brand, powerStatus, model, number) {
        super(brand, powerStatus);
        this.model = model;

    }

    call(number) {
        console.log(`📞 Calling ${number} from ${this.brand} ${this.model}`);
    }
}

// ✅ تست کلاس‌ها
const myPhone = new Phone("Samsung", "Galaxy S21");

myPhone.togglePower(); // ✅ "Samsung is now ON"
myPhone.call("09123456789"); // ✅ "📞 Calling 09123456789 from Samsung Galaxy S21"/

// تمرین ویچری
class Character {
    constructor(name, lvl) {
        this.name = name;
        this.lvl = lvl;
    }
    introduce(){
        return `I am ${this.name}, Level ${this.lvl}`;
    }
}

class Witcher extends Character {
    constructor(name, lvl,sign, ) {
        super(name, lvl);
        this.sign = sign;
    }
    castSign(){
        return `🔥 ${this.name} casts ${this.sign}!`;
    }
}

const geralt = new Witcher('peyman',60,"FU")
console.log(geralt.introduce());
console.log(geralt.castSign());
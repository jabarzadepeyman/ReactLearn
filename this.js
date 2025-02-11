// در بیرون از هر تابعی به معنای خود ویندوز است
console.log(this);
// this in object mean that object

let peyman = {
    name: 'Peyman',
    family: 'J',
    seyhi : function () {return this.name}
    // در یک ابجکت اگر از یک ارو فانکشتن استفاده کنی نمیتونی از دیس استفاده کنی
}

console.log(peyman.seyhi());


// this in function return widow or undefined
function showThis(){
    console.log(this)}
console.log(showThis());

// this in arrow function
// return window or undefined

let ShowThis = () => {
    console.log(this);
};
ShowThis();


// تمرین ها
console.log(this); // چون من در ترمینال اجرا میکنم باز هم یک مقدار خالی را برگرداند
"use Strict";
console.log(this); // چون من در ترمینال اجرا میکنم باز هم یک مقدار خالی را برگرداند

// تمرین دوم
const car = {
    brand: "BMW",
    getBrand: function() {
        console.log(this.brand);
    }
};

car.getBrand(); // BMW

// تمرین سوم
function showThis() {
    console.log(this);
}

showThis(); //چون من در ترمینال اجرا میکنم باز هم یک مقدار خالی را برگرداند

// تمرین چهارم
const person = {
    name: "Ali",
    getName: () => {
        console.log(this.name);
    }
};

person.getName(); // چون از ارو فانکش استفاده شده مقدار ویندوز رو باید برگردونه ولی چون من تو ترمینال اجرا میکنم بهم {} میده

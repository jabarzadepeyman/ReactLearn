
// تمرین
// مقدار مای ور چی میشه
console.log(myVar); // undefined  چون ور تعریفش شدنش هویست میشه ولی مقدار دادنش نه
var myVar = 10;

console.log(myFunc()); // Hello World
function myFunc() {
    return "Hello World!";
}

// تمرین دو
// console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError
let b = 10;

// console.log(c); // ReferenceError
const c = 15;


// تمرین سه
console.log(sayHello()); // err Function Expression Cannot Be Hoisting

var sayHello = function() {
    return "Hello from function expression!";
};

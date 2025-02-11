// تمرین اول
// این هارو ارو کن
function add(a, b) {
    return a + b;
}

function greet(name) {
    return "Hello " + name;
}

// جواب
const add = (a, b) => a + b;
const greets = name => `hello ${name}`;


// تمرین دو
const person = {
    name: "Ali",
    sayHello: function() {
        setTimeout(function() {
            console.log(`Hello, I am ${this.name}`); // در ست تایم اوت دیس به معنای ویندوز است نه پرسون
        }, 1000);
    }
};

person.sayHello(); // Hello , I am undefined

// تمرین سوم
const multiply1 = (a, b) => { return a * b };
const multiply2 = (a, b) => a * b; // چون عبارت تک خطی هستش نیازی به اکولاد و ریترن نیست

// تمرین چهارم
// const getUser = () => { name: "Ali", age: 25 }; // چون دو مقدار برگشتی داره و دراصل ابجکت برمیگردونه باید در پرانتز بزاری
const getUser = () => ({ name: "Ali", age: 25 });
console.log(getUser());

// تمرین پنچ
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared); // مپ همیشه یک آرایه برمیگردونه
// [1 , 4 , 9 , 16 , 25]
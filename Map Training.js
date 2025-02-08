let score = [10, 5, 10, 15];
score.map((item,index)=>{
    console.log(`itemNum ${item} , index is ${index}`);
})
// مپ بر خلاف فورایچ نتیجه ای برمیگرداند که قالبا آرایه است

// تمرین اول
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(item => item*2);
console.log(doubledNumbers); // باید [2, 4, 6, 8, 10] چاپ کنه
// تمرین دوم
const users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 30 },
    { name: "Reza", age: 22 }
];
const names = users.map(user => user.name);
console.log(names); // باید ["Ali", "Sara", "Reza"] چاپ کنه
// تمرین سوم
const words = ["hello", "world", "javascript"];
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords); // باید ["HELLO", "WORLD", "JAVASCRIPT"] چاپ کنه
// تمرین چهارم
const users2 = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 17 },
    { name: "Reza", age: 20 }
];



const updatedUsers = users2.map(user => ({
    ...user,
    status: user.age > 18 ? "adult" : "minor"
}));
// نکته فقط پرانتزش هست


console.log(updatedUsers);
/* باید خروجی زیر باشه:
[
    { name: "Ali", age: 25, status: "adult" },
    { name: "Sara", age: 17, status: "minor" },
    { name: "Reza", age: 20, status: "adult" }
]
*/


// const numbers = [10, 20, 30, 40];
//
// const stringNumbers = numbers.map(number => number*2);
//
// console.log(stringNumbers); // باید ["عدد: 10", "عدد: 20", "عدد: 30", "عدد: 40"] چاپ کنه

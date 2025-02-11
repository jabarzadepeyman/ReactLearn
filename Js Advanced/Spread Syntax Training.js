// تمرین اول
const numbers = [1, 2, 3, 4, 5];

// const copyNumbers = /* اینجا چی باید بنویسیم؟ */;
const copyNumbers = [...numbers];

copyNumbers.push(6);

console.log(numbers); // باید [1, 2, 3, 4, 5] بمونه (نباید تغییر کنه)
console.log(copyNumbers); // باید [1, 2, 3, 4, 5, 6] باشه

// تمرین دوم
const arr1 = ["Apple", "Banana"];
const arr2 = ["Orange", "Mango"];

// const mergedArray = /* اینجا چی باید بنویسیم؟ */;
const mergedArray = [...arr1,...arr2];
console.log(mergedArray); // باید ["Apple", "Banana", "Orange", "Mango"] باشه

// تمرین سوم
const person = { name: "Ali", age: 25 };

// const copyPerson = /* اینجا چی باید بنویسیم؟ */;
const copyPerson = {...person};
copyPerson.age = 30;

console.log(person); // باید { name: "Ali", age: 25 } بمونه
console.log(copyPerson); // باید { name: "Ali", age: 30 } باشه


// تمرین چهارم
const user1 = { name: "Sara", age: 28 };
const user2 = { age: 30, city: "Tehran" };

// const mergedUser = /* اینجا چی باید بنویسیم؟ */;
const mergedUser = {...user1,...user2.city};
// const mergedUser = {...user1,...user2}; // البته اگر این کار رو کنی جایگرین میشه

console.log(mergedUser); // باید { name: "Sara", age: 30, city: "Tehran" } باشه

// تمرین پنجم
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [2, 4, 6];

// const result = /* اینجا چی باید بنویسیم؟ */;
const result = sum(...numbers);

console.log(result); // باید 12 باشه


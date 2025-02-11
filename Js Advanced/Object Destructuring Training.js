// تمرین اول
const person = {
    name: "Ali",
    age: 25,
    city: "Tehran"
};

// const /* اینجا چی باید بنویسیم؟ */ = person;
const {name:name,age:age} = person;

console.log(name); // باید "Ali" باشه
console.log(age);  // باید 25 باشه

// تمرین دوم
const user = {
    name: "Sara",
    age: 30
};

// const /* اینجا چی باید بنویسیم؟ */ = user;
const {name:name2,age:age2,job:job2 = 'Unemployed'} = user;

console.log(name2); // باید "Sara" باشه
console.log(age2);  // باید 30 باشه
console.log(job2);  // باید "Unemployed" باشه

// تمرین سوم
const person2 = {
    name3: "Reza",
    age3: 22
};

const {name3:fullName,age3:yearsOld} = person2;

console.log(fullName); // باید "Reza" باشه
console.log(yearsOld); // باید 22 باشه


// تمرین چهارم
const person4 = {
    name8: "Mohammad",
    age: 28,
    country: "Iran",
    job: "Engineer"
};

const {name8:name6,...rest} = person4;

console.log(name6); // باید "Mohammad" باشه
console.log(rest); // باید { age: 28, country: "Iran", job: "Engineer" } باشه


// تمرین پنجم
function showBookInfo(book) {
    const {title:title,author:author} = book;
    console.log(`Title: ${title}, Author: ${author}`);
}

const book = { title: "1984", author: "George Orwell", year: 1949 };
showBookInfo(book); // باید "Title: 1984, Author: George Orwell" چاپ کنه

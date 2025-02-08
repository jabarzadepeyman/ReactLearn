// تمرین اول
// function sumNumbers(/* اینجا چی باید باشه؟ */) {
//     return /* چطور همه‌ی اعداد رو جمع کنیم؟ */;
// }

function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
    // return numbers.reduce((sum, num) => sum + num, 0) : 0; این رو هم میشه اگر هیچی نفرستاد 0 برگدونه
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // باید 15 چاپ کنه
console.log(sumNumbers(10, 20, 30)); // باید 60 چاپ کنه

// تمرین دوم
// function introduce(/* اینجا چی باید باشه؟ */) {
//     console.log(`Hi, I'm ${name} and my hobbies are ${hobbies}`);
}
// اول اسمشو جدا میگیریم بقیشم با یک رست میریزیم تو متغیر هابیس
function introduce({name,...hobbies}) {
    console.log(`Hi, I'm ${name} and my hobbies are ${hobbies.join(", ")}`); // ✅ برای نمایش آرایه در console.log(), بهتره join(", ") استفاده بشه تا خروجی خواناتر بشه.
}

introduce("Ali", "Football", "Coding", "Reading");
// خروجی: Hi, I'm Ali and my hobbies are Football,Coding,Reading


// تمرین سوم
const person = {
    name: "Sara",
    age: 25,
    city: "Tehran",
    job: "Developer"
};

const {name,...rest} = person;

console.log(name); // باید "Sara" چاپ بشه
console.log(rest); // باید { age: 25, city: "Tehran", job: "Developer" } چاپ بشه


// تمرین چهارم
const numbers = [10, 20, 30, 40, 50];

const [first,...rest] = numbers; // ✅ برای Array Destructuring باید [ ] استفاده کنیم، نه { }.

console.log(first); // باید 10 باشه
console.log(rest); // باید [20, 30, 40, 50] باشه
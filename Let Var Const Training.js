// تمرین یک
console.log(x); // undefined
var x = 10;

// console.log(y); // tdz cant set value before creation
let y = 20;

// console.log(z); // tdz cant set value before creation
const z = 30;


// تمرین دوم
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // 3 3 3
 }
// ✅ نحوه‌ی اجرای این کد، مرحله‌به‌مرحله
// 1️⃣ حلقه اجرا می‌شه و مقدار i از 0 تا 3 می‌ره.
// 2️⃣ در هر بار اجرای for، یک setTimeout ثبت می‌شه، ولی این setTimeout به‌طور همزمان اجرا نمی‌شه!
// 3️⃣ وقتی for تموم می‌شه، مقدار i = 3 شده.
// 4️⃣ بعد از ۱۰۰۰ میلی‌ثانیه، setTimeout ها اجرا می‌شن، ولی مقدار i در اون لحظه 3 هست!


for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000); // log 0 1 2 every second
}

// تمرین سوم
const user = { name: "Ali" };
user.name = "Reza"; // مرجع رو نمیتونی تغییر بدی اما محتوای آبجکت رو میتونی
console.log(user); // reza

// تمرین چهار
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
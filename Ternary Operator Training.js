// تمرین اول
const number = 7;
const result = (number % 2) ? "fard" : "zog"/* اینجا چی باید بنویسیم؟ */;
console.log(result); // باید "فرد" چاپ کنه
// تمرین دوم
const username = "";
const displayName = (username) ? username : "کاربر مهمان";
console.log(displayName); // باید "کاربر مهمان" چاپ کنه
// تمرین سوم
const speed = 120;
console.log((speed >= 120) ? "سرعت غیرمجاز" : "سرعت مجاز"); // باید "سرعت غیرمجاز" چاپ کنه
// تمرین چهارم
const totalPrice = 600;
const discount = (totalPrice > 500) ? "20%" : "10%";
console.log(discount); // باید "20%" چاپ کنه
// تمرین پنجم
const grade = 85;
const finalGrade = (grade>90) ? "A" : (grade<89 && grade>80) ? "B" : (grade<79 && grade>70) ? "C" : "F";
console.log(finalGrade); // باید "B" چاپ کنه

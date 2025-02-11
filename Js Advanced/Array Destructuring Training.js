//تمرین اول
const fruits = ["Apple", "Banana", "Orange"];

// const /* اینجا چی باید بنویسیم؟ */ = fruits;
const [first,second] = fruits;

console.log(first);  // باید "Apple" باشه
console.log(second); // باید "Banana" باشه

// تمرین دوم
const colors = ["Red", "Green", "Blue"];

// const /* اینجا چی باید بنویسیم؟ */ = colors;
const [first1,,third3] = colors;

console.log(first1);  // باید "Red" باشه
console.log(third3);  // باید "Blue" باشه

// تمرین سوم
const names = ["Ali", "Sara"];

const [first0,second0,third0 = 'Not Found'] = names;

console.log(first0);  // باید "Ali" باشه
console.log(second0); // باید "Sara" باشه
console.log(third0);  // باید "Not Found" باشه

// تمرین چهارم
const numbers = [10, 20, 30, 40, 50];

// const /* اینجا چی باید بنویسیم؟ */ = numbers;
const [first9,...rest9] = numbers;

console.log(first9); // باید 10 باشه
console.log(rest9);  // باید [20, 30, 40, 50] باشه


// تمرین پنچم
function printCoordinates(coords) {
    // const /* اینجا چی باید بنویسیم؟ */ = coords;
    const [x,y] = coords;
    console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates([12, 45]); // باید "X: 12, Y: 45" چاپ کنه

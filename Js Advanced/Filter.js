const users = [
    { name: "Ali", age: 15 },
    { name: "Sara", age: 22 },
    { name: "Reza", age: 30 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);
// ✅ [{ name: "Sara", age: 22 }, { name: "Reza", age: 30 }]


// تمرین یک
const monsters = [
    { name: "Griffin", level: 30 },
    { name: "Leshen", level: 60 },
    { name: "Striga", level: 80 },
    { name: "Drowner", level: 20 }
];

// ❓ چطور `filter()` رو استفاده کنیم که فقط `level` بالای ۵۰ رو نگه داره؟
let high = monsters.filter(monster => monster.level >= 50);
console.log(high);q
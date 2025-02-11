const manager = {
    name : "peyman",
   seyhi : function (){
        return `hi my name is ${this.name}`
   }
}
console.log(manager.seyhi())
// اگر در یک متغیر ذخیرش کنیم مقدارش رو از دست میده

let xxx = manager.seyhi
console.log(xxx()) // مقدار اندیفاید برمیگردونه
// حالا با بایند میچسبونیمش
xxx = manager.seyhi.bind(manager) // بایند یعنی چسبوندن به تابع اصلی
console.log(xxx())

// تمرین اول
const person = {
    name: "Ali",
    greet: function() {
        return `سلام، من ${this.name} هستم`;
    }
};

const sayHello = person.greet.bind(person);
console.log(sayHello()); // ❌ "سلام، من undefined هستم"
// ❓ اینجا چطور `bind()` رو استفاده کنیم که مقدار `this` درست بشه؟
// تمرین دوم

const user = {
    name: "Sara",
    greet: function() {
        setTimeout(function() {
            console.log(`سلام، من ${this.name} هستم`);
        }.bind(this), 1000);
    }
};

user.greet(); // ❌ "سلام، من undefined هستم"

// ❓ چطور `bind()` رو استفاده کنیم که مقدار `this` درست بشه؟
// تمرین سوم
const speaker = {
    name: "Reza",
    sayHello: function(language) {
        if (language === "fa") {
            console.log(`سلام، من ${this.name} هستم`);
        } else {
            console.log(`Hello, I am ${this.name}`);
        }
    }
};

const sayInPersian = speaker.sayHello.bind(speaker,"fa");
sayInPersian();

// چون اشتباه داشتم دوباره

// تمرین اول
const student = {
    name: "Mina",
    introduce: function() {
        return `سلام، من ${this.name} هستم و دانشجو هستم`;
    }
};

const introduceStudent = student.introduce.bind(student);
console.log(introduceStudent());
// تمرین دوم
const counter = {
    count: 0,
    start: function() {
        setInterval(function() {
            this.count++;
            console.log(`مقدار شمارنده: ${this.count}`);
        }.bind(counter), 1000);
    }
};

counter.start(); // ❌ مقدار `this.count` تغییر نمی‌کند
// تمرین سوم
const person2 = {
    name: "Reza",
    sayInfo: function(age) {
        console.log(`نام من ${this.name} هست و ${age} سال دارم`);
    }
};

const sayPersonInfo = person2.sayInfo.bind(person2,30);
sayPersonInfo();
// آرگومان دومی که برای بایند میفرستی دراصل مقدار همون ورودی فانکشن هست

// تمرین های سخت تر
class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        setInterval(function () {
            this.seconds++;
            console.log(`⏳ زمان سپری شده: ${this.seconds} ثانیه`);
        }.bind(this), 1000);
    }
}

const myTimer = new Timer();
myTimer.start(); // ❌ مقدار `this.seconds` تغییر نمی‌کند

// ❓ چطور `bind()` رو استفاده کنیم که مقدار `this` درست بشه؟
// تمرین دوم
const user2 = {
    name: "Ali",
    showName: function() {
        console.log(`👤 نام کاربر: ${this.name}`);
    }
};

document.querySelector("button").addEventListener("click", user2.showName.bind(user2));

// تمرین سوم
const team = {
    name: "Developers",
    members: ["Ali", "Sara", "Reza"],
    showMembers: function() {
        this.members.forEach(function(member) {
            console.log(`👥 ${member} عضو تیم ${this.name} است`);
        }.bind(team));
    }
};
team.showMembers();


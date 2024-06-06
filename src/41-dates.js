// Date(year, month, day, hour, minute, second, ms)
const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);
console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);

const date1 = new Date("2023-12-31");


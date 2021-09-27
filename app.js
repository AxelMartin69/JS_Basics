const today = new Date();

val = today.getMonth(); // jaanuar on 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday = new Date("10/02/2021")

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2020);
birthday.setHours(4);
birthday.setMinutes(45);


console.log(birthday);
console.log(val);
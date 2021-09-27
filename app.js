const numbers = [0, 1, 2, 3, 4, 5];
const fruits = ["õun", "banaan", "virsik"];
let val;

val = numbers.length;
val = Array.isArray(numbers); // kas on massinv??
val = numbers[3];
numbers[3] = 100; // asendamine

// lisamine
numbers.push(250); // taha
numbers.unshift(45); // ette

// eemaldamine
numbers.pop(); // tagant
numbers.shift(); // eest

val = numbers.indexOf(100);

// lõikamine
numbers.splice(2, 1);

val = fruits.sort();

// numbrid kahanemis järjekorras
val = numbers.sort(function(x, y){
	return x-y;
});


console.log(val);
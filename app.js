//tüübiteisendused

let val;

//number -> string
val = String(555);

// boolan -> string

val = String(true);

// objekt -> string

val = String(new Date());


// string -> number

val = Number("5");

//boolan -> number

val = Number(true);

// Tekst -> number: pole voimalik
val = Number("tere")


console.log(typeof val);
console.log(val);
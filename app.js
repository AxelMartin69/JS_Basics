const name = "Kadi";
const surname = "Tamm";
const age = 25;
const text = "Tere, olen Kadi";
const tags = "arendus, veeb";

let val;

val = name + " " + surname;

val = name;
val += surname

val = text + ", minu töövaldkond on " + tags;

val = "See on \"Jutumärkides\"";

val = name.toLowerCase();

val = surname.charAt(surname.lenght - 1);
val = surname.indexOf("a");
val = surname.slice(0, 2);

val = tags.split(",")


console.log(val);
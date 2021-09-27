const person = {
	fisrtname: "Kadi",
	surname: "Tamm",
	age: 23,
	email: "kadi.tamm@gmail.com",
	hobbies: ["sport", "music"],
	addres: {
		city: "Tallinn",
		county: "Harjumaa"
	},
	getBirthdayYear: function(){
		return 2021 - this.age
	}
};

let val;

val = person.firstname;
val = person["surname"];
val = person.age;
val = person.hobbies
val = person.addres.city
val = person.addres["county"]

val = person.getBirthdayYear()



console.log(val);
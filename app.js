const form = document.querySelector("form");

const taskInput = document.querySelector("¤task");

taskInput.addEventListener("cut", runEvent);

function runEvent(e) {
	console.log(`Event is ${r.type}`)
	console.log(e.target.value)

}
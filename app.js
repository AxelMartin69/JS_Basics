const name = "Kadi";
const surname = "Tamm";
const age = 25;
const tags = "arendus, veeb";

let val;

//template

val = `
	<ul>
		<li>Eesnimi on ${name}</li>
		<li>Perekonnanimi on ${surname}</li>
		<li>Vanus on ${age}</li>
		<li>Tagid on ${tags}</li>
	</ul>	

`;


document.body.innerHTML = val;

console.log(val);
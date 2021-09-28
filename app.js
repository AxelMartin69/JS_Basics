// deklareerimine

function greeting(firstname, lastname){
	if(typeof firstname === 'undefined'){
		firstname = 'Axel'
	}
	if(typeof lastname === 'undefined'){
		lastname = 'Tammekand'
	}
	return "Tere, " + firstname + ' ' + lastname;
}

console.log(greeting())
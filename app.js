/**********POP UP AGE**********/
$(document).ready(function(){
	ageVerif();
});

function ageVerif() {

	let ageVerif = prompt("Please enter your age !");
	do{
		if (ageVerif < 18) {
			document.location.href="https://www.imdb.com/";
		}else if (!Number(ageVerif) ) {
			alert("pas cool man ! Ecris moi un nombre");
			ageVerif = prompt("Please enter your age !");
		}else if(ageVerif== null || ageVerif == "" ){
			alert("Come on man! Ecris moi un nombre");
			ageVerif = prompt("Please enter your age !");
		}
	}while(Number(ageVerif)>=18)
}

/**********POP UP CONTACT**********/
function recup() {
	var name = document.getElementById("fname").value;
	var lastname = document.getElementById("lname").value;
	var email = document.getElementById("exampleFormControlInput1").value;
	var subject =  document.getElementById("subject").value;
	var message = document.getElementById("message").value;

	alert("FIRST NAME : " + name + "\nLAST NAME : " + lastname + "\nEMAIL : " + email + "\nSUBJECT : " + subject +  "\nMESSAGE : " + message);
}


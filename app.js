/**********POP UP AGE**********/
// $(document).ready(function(){
// 	ageVerif();
// });

// function ageVerif() {

// 	let ageVerif = prompt("Please enter your age !");
// 	do{
// 		if (ageVerif < 18) {
// 			document.location.href="https://www.imdb.com/";
// 		}else if (!Number(ageVerif) ) {
// 			alert("pas cool man ! Ecris moi un nombre");
// 			ageVerif = prompt("Please enter your age !");
// 		}else if(ageVerif== null || ageVerif == "" ){
// 			alert("Come on man! Ecris moi un nombre");
// 			ageVerif = prompt("Please enter your age !");
// 		}
// 	}while(Number(ageVerif)>=18)
// }

/**********POP UP CONTACT**********/
// function recup() {
// 	var name = document.getElementById("fname").value;
// 	var lastname = document.getElementById("lname").value;
// 	var email = document.getElementById("exampleFormControlInput1").value;
// 	var subject =  document.getElementById("subject").value;
// 	var message = document.getElementById("message").value;

// 	alert("FIRST NAME : " + name + "\nLAST NAME : " + lastname + "\nEMAIL : " + email + "\nSUBJECT : " + subject +  "\nMESSAGE : " + message);
// }
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

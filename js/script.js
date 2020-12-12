// alert("ciao");

var name, surname, color, secretNumb;

name = prompt("Insert your first name");
surname = prompt("insert your last name");
color = prompt("Insert your favorite color");
secretNumb = 19;

rndpwd = name + surname + color + secretNumb;

// console.log(rndpwd);

document.getElementById("random-pwd").innerHTML += rndpwd;

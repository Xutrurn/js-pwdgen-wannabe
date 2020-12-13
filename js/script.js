// alert("ciao");

var name, surname, color, secretNumb;

name = prompt("Insert your first name");
surname = prompt("Insert your last name");
color = prompt("Insert your favorite color");
secretNumb = 19;

rndpwd = name + surname + color + secretNumb;

// console.log(rndpwd);

// document.getElementById("random-pwd").innerHTML += rndpwd;

document.getElementById("random-pwd").innerHTML += rndpwd;

// rndpwd.length

// console.log(rndpwd.length);

document.getElementById("pwd-length").innerHTML += rndpwd.length;

// alert("hello world");

var name, surname, color, secretNumb;

name = prompt("insert your name");
surname = prompt("insert your surname");
color = prompt("insert your color");
secretNumb = 19;

rndpwd = name + surname + color + secretNumb;

// console.log(rndpwd);

document.getElementById("random-pwd").innerHTML += rndpwd;

// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;



// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}

// USER INPUT
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// ------------------------ EASY WAY ------------------------
// let username = window.prompt("What's your username?");

// console.log(username);

// -------------------- PROFESSIONAL WAY --------------------
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
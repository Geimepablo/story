/* Declare variables below to save the different sections (divs) of your story*/
let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionOneImg = document.querySelector(".option-one-img");
let optionTwoEnd = document.querySelector(".option-one-end");






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
buttonOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwoEnd.style.display = "block";
};
buttonTwo.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwo.style.display = "block";
};

optionOneImg = function() {
    optionOne.style.display = "none";
    optionTwoEnd.style.display = "block";
};
/*
INSERT_VARIABLE.onclick=function(){

};
   

INSERT_VARIABLE.onclick=function(){

};

*/


// This code will change the text of the <p> tag when you hover over it 
title.onmouseover = function() {
    title.innerHTML = "Tehe!";
};
body.onkeydown = function() {
    title.style.color = "red";
};

// var x = document.getElementById("myAudio").autoplay;

setTimeout(() => {title.innerHTML = "The End";}, 12000);  



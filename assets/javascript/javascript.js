//code to toggle the colors of main and body

var elem = document.getElementById("btn");
var elementsurprise= document.getElementById("btn-box");
var element = document.getElementById("toggle-sec");
var element2 = document.getElementById("output-sec-pseudo");
var element3 = document.getElementById("input-sec");
var newbod= document.body;

function changeFunction()
{
  elem.classList.toggle("btn-new");
  element.classList.toggle("dark-mode");
  element2.classList.toggle("dark-mode");
  element3.classList.toggle("dark-mode");
  newbod.classList.toggle("darkbod-mode");
 }

 elementsurprise.addEventListener('click', changeFunction);
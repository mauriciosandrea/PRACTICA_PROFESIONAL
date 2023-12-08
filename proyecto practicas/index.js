(function () {
	"use strict";

	// define variables
	var items = document.querySelectorAll(".timeline li");

	// check if an element is in viewport
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function callbackFunc() {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				items[i].classList.add("in-view");
			}
		}
	}

	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();

const patch = document.getElementById("patch");
const Navbar = document.getElementById("Row1TopBar");

patch.style.height = Navbar.clientHeight + "px";
//Guarda el numero del modal abierto en la variable "a"
let s = 0;
function setButtonNumber(number) {
	console.log(number);

	s = number;
	HabilitarServicios(number);
}

//Habilita el modal
function HabilitarServicios(number) {
	document.getElementById(number).style.display = "inherit";
}

//Guarda el numero del modal abierto en la variable "a"
let a = 0;
function setModalNumber(number) {
	console.log(number);
	a = number;
	HabilitarModal(number);
}

//Habilita el modal
function HabilitarModal(number) {
	document.getElementById(number).style.display = "inherit";
}

function CloseModal() {
	document.getElementById(a).style.display = "none";
}

function addModalNumberToUrl(element) {
	element.href = `servicios.html?modalNumber=${a}`;
}

function validation() {
	let name = document.getElementById("Nombre").value;
	let email = document.getElementById("email").value;
	let asunto = document.getElementById("Asunto").value;
	let mensaje = document.getElementById("Mensaje").value;
	let mensajito = document.getElementById("mensajito");

	if (!name || !email || !asunto || !mensaje) {
		mensajito.style.display = "block";
	} else {
		return;
	}
}

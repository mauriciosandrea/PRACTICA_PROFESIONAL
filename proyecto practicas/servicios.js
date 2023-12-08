const $carousel_cells = $("#product-carousel li");
const $carousel_dots = $("#carousel-dots li");
const $carousel_nav = $(".carousel-nav");
let selected_product_index = 0;

function selectProduct(index) {
	selected_product_index = index % $carousel_cells.length;

	if (selected_product_index < 0)
		selected_product_index = $carousel_cells.length + selected_product_index;

	$carousel_cells.each(function (i) {
		let offset = i - selected_product_index;
		if (offset < 0) offset += $carousel_cells.length;

		let index;
		for (index = 0; index < $carousel_cells.length + 1; index++) {
			$(this)
				.removeClass("item-" + index)
				.addClass("item-" + (offset + 1));
		}
	});

	$carousel_dots
		.eq(index)
		.addClass("active")
		.siblings("li")
		.removeClass("active");
}

/* Arrow clicks */
$carousel_nav.click(function () {
	const delta = $(this).hasClass("prev") ? -1 : 1;
	const $delta_product = $(
		`#product-carousel li:eq(${
			(selected_product_index + delta) % $carousel_cells.length
		})`
	);
	const delta_product_index = parseInt($delta_product.index());
	selectProduct(delta_product_index);
});

/* Can clicks */
$carousel_cells.click(function () {
	selectProduct($(this).index());
});

/* Pagination */
$carousel_dots.click(function (e) {
	selectProduct($(this).index());
	$(e.currentTarget).addClass("active").siblings("li").removeClass("active");
});

/* Left/Right key arrows */
$(document).keydown((e) => {
	const delta = e.keyCode == 37 ? -1 : 1;
	const $delta_product = $(
		`#product-carousel li:eq(${
			(selected_product_index + delta) % $carousel_cells.length
		})`
	);
	const delta_product_index = parseInt($delta_product.index());

	if (e.keyCode == 37 || e.keyCode == 39) {
		selectProduct(delta_product_index);
		return false;
	}
});

/*
Inspired by:
https://www.7up.com/en/products
*/

const patch = document.getElementById("patch");
const ravbar = document.getElementById("Row1TopBar");

patch.style.height = ravbar.clientHeight + "px";

let a = 0;
function SubMenuToogle(number) {
	a = number;
	if (document.getElementById(a).style.display != "none") {
		document.getElementById(a).style.display = "none";
	} else {
		document.getElementById(a).style.display = "inherit";
	}
}

let AlreadyOpen = "AA";
let ChangeOpacityOf = ""; //Aca guarda el objeto para cambiarle la opacidad, hace la animacion mas bonita

function OpenService(data) {
	let existingDots = document.querySelectorAll(".dot");
	existingDots.forEach(function (dot) {
		dot.remove();
	});

	// 2. Buscar el elemento basado en el "data" y agregar el puntito
	let selectedElement;
	switch (data) {
		case "AA":
			console.log("Entró al caso AA");
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('AA')\"]"
			);
			console.log(selectedElement); // Esto te mostrará el elemento seleccionado o null si no lo encontró

			break;
		case "BB":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('BB')\"]"
			);
			break;
		case "CC":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('CC')\"]"
			);
			break;
		case "DD":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('DD')\"]"
			);
			break;
		case "EE":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('EE')\"]"
			);
			break;
		case "FF":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('FF')\"]"
			);
			break;
		case "GG":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('GG')\"]"
			);
			break;
		case "HH":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('HH')\"]"
			);
			break;
		case "NN":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('NN')\"]"
			);
			break;
		case "OO":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('OO')\"]"
			);
			break;
		case "PP":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('PP')\"]"
			);
			break;
		case "QQ":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('QQ')\"]"
			);
			break;
		case "II":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('II')\"]"
			);
			break;
		case "JJ":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('JJ')\"]"
			);
			break;
		case "KK":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('KK')\"]"
			);
			break;
		case "MM":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('MM')\"]"
			);
			break;
		case "RR":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('RR')\"]"
			);
			break;
		case "SS":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('SS')\"]"
			);
			break;
		case "TT":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('TT')\"]"
			);
			break;
		case "UU":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('UU')\"]"
			);
			break;
		case "VV":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('VV')\"]"
			);
			break;
		case "WW":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('WW')\"]"
			);
			break;
		case "XX":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('XX')\"]"
			);
			break;
		case "YY":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('YY')\"]"
			);
			break;
		case "00":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('00')\"]"
			);
			break;
		case "11":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('11')\"]"
			);
			break;
		case "22":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('22')\"]"
			);
			break;
		case "HH":
			selectedElement = document.querySelector(
				"li[onclick=\"OpenService('HH')\"]"
			);
			break;
	}

	if (selectedElement) {
		let dotElement = document.createElement("span");
		dotElement.className = "dot";
		selectedElement.insertBefore(dotElement, selectedElement.firstChild);
	}

	//Recibe el nombre del modal que hizo on clik
	//Si ya esta abierto no hace nada.
	if (data == AlreadyOpen) {
		return;
	}

	//Sino guarda su nombre
	ChangeOpacityOf = data;

	//Activo el servicio llamado con opacidad 0
	var ele = document.getElementsByClassName(data);

	for (var i = 0; i < ele.length; i++) {
		ele[i].style.display = "inherit";
		ele[i].style.opacity = "0";

		//Agrego un delay para darle opacidad 1
		setTimeout(function () {
			ChangeServiceOpacity();
		}, 0); // <- Delay time.
	}

	//Desactivo los que ya estaban activados
	var ele2 = document.getElementsByClassName(AlreadyOpen);
	for (var i = 0; i < ele2.length; i++) {
		ele2[i].style.display = "none";
	}

	AlreadyOpen = data;
	console.log(AlreadyOpen);
}

//Le subo una opacidad ya posicionado en
function ChangeServiceOpacity() {
	var ele = document.getElementsByClassName(ChangeOpacityOf);
	for (var i = 0; i < ele.length; i++) {
		ele[i].style.transition = "opacity 0.1s ease-in-out"; //<- delay transicion opacidad
		ele[i].style.opacity = "1";
	}
}

function getQueryParam(param) {
	let searchParams = new URLSearchParams(window.location.search);
	return searchParams.get(param);
}

let modalNumber = getQueryParam("modalNumber");
if (modalNumber) {
	switch (modalNumber) {
		case "1":
			SubMenuToogle(0);
			OpenService("AA");
			console.log("entro al caso AA");
			break;
		case "2":
			SubMenuToogle(0);
			OpenService("BB");
			break;
		case "3":
			SubMenuToogle(0);
			OpenService("CC");
			break;
		case "4":
			SubMenuToogle(0);
			OpenService("DD");
			break;
		case "5":
			SubMenuToogle(2);
			OpenService("EE");
			break;
		case "6":
			SubMenuToogle(2);
			OpenService("FF");
			break;
		case "7":
			SubMenuToogle(2);
			OpenService("GG");
			break;
		case "8":
			SubMenuToogle(2);
			OpenService("HH");
			break;
		case "9":
			SubMenuToogle(4);
			OpenService("NN");
			break;
		case "10":
			SubMenuToogle(4);
			OpenService("OO");
			break;
		case "11":
			SubMenuToogle(4);
			OpenService("PP");
			break;
		case "12":
			SubMenuToogle(4);
			OpenService("QQ");
			break;
		case "13":
			SubMenuToogle(3);
			OpenService("II");
			break;
		case "14":
			SubMenuToogle(3);
			OpenService("JJ");
			break;
		case "15":
			SubMenuToogle(3);
			OpenService("KK");
			break;
		case "16":
			SubMenuToogle(3);
			OpenService("MM");
			break;
		case "17":
			SubMenuToogle(5);
			OpenService("RR");
			break;
		case "18":
			SubMenuToogle(5);
			OpenService("SS");
			break;
		case "19":
			SubMenuToogle(5);
			OpenService("TT");
			break;
		case "20":
			SubMenuToogle(5);
			OpenService("UU");
			break;
		case "21":
			SubMenuToogle(6);
			OpenService("VV");
			break;
		case "22":
			SubMenuToogle(6);
			OpenService("WW");
			break;
		case "23":
			SubMenuToogle(6);
			OpenService("XX");
			break;
		case "24":
			SubMenuToogle(6);
			OpenService("YY");
			break;
		case "25":
			SubMenuToogle(1);
			OpenService("00");
			break;
		case "26":
			SubMenuToogle(1);
			OpenService("11");
			break;
		case "27":
			SubMenuToogle(1);
			OpenService("22");
			break;
		case "28":
			SubMenuToogle(1);
			OpenService("HH");
			break;
		// Añade más casos si es necesario
		default:
			break;
	}
}

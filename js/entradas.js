
// ZONA DE ENTRADAS
// Zona Weekend 1

  
var displacementValue;
var offsideColumns;


function updateDisplacementValue(){
	if (window.matchMedia("(max-width: 834px)").matches) {
	  console.log("-834");
	  displacementValue = 100;
	  offsideColumns=4;
	}

	else {
	  console.log("+834");
	  displacementValue = 50;
	  offsideColumns=3;
	}

}


var counterSlides=0;

function adelante(){

	updateDisplacementValue();

	counterSlides= counterSlides-displacementValue;

	if(counterSlides<-displacementValue*offsideColumns){
		counterSlides=0;
	}

var contSlidercards = document.getElementById("cards");

contSlidercards.style.marginLeft=counterSlides+"%";

}


function atras(){

	updateDisplacementValue();

	counterSlides= counterSlides+displacementValue;

	if(counterSlides>0){
		counterSlides=-displacementValue*offsideColumns;
	}
var contSlidercards = document.getElementById("cards");
contSlidercards.style.marginLeft=counterSlides+"%";
}


// Zona Weekend 2

  
var displacementValue2;
var offsideColumns2;


function updateDisplacementValue2(){
	if (window.matchMedia("(max-width: 576px)").matches) {
	  console.log("-834");
	  displacementValue2 = 100;
	  offsideColumns2=4;

	} else if (window.matchMedia("(max-width: 834px)").matches){
	  console.log(">576 - <834");
	  displacementValue2 = 100;
	  offsideColumns2=3;
	}

	else {
	  console.log("+834");
	  displacementValue2 = 78.5;
	  offsideColumns2=2;
	}

}

var counterSlides2=0;

function adelante2(){

	updateDisplacementValue2();

	counterSlides2= counterSlides2-displacementValue2;

	if(counterSlides2<-displacementValue2*offsideColumns2){
		counterSlides2=0;
	}

var contSlidercards2 = document.getElementById("cards2");

contSlidercards2.style.marginLeft=counterSlides2+"%";

}


function atras2(){

	updateDisplacementValue2();

	counterSlides2= counterSlides2+displacementValue2;

	if(counterSlides2>0){
		counterSlides2=-displacementValue2*offsideColumns2;
	}
var contSlidercards2 = document.getElementById("cards2");
contSlidercards2.style.marginLeft=counterSlides2+"%";
}

// Zona Weekend Completo

  
var displacementValue3;
var offsideColumns3;


function updateDisplacementValue3(){
	if (window.matchMedia("(max-width: 576px)").matches) {
	  console.log("-834");
	  displacementValue3 = 100;
	  offsideColumns3=4;

	} else if (window.matchMedia("(max-width: 834px)").matches){
	  console.log(">576 - <834");
	  displacementValue3 = 50;
	  offsideColumns3=3;
	}

	else {
	  console.log("+834");
	  displacementValue3 = 78.5;
	  offsideColumns3=2;
	}

}

var counterSlides3=0;

function adelante3(){

	updateDisplacementValue3();

	counterSlides3= counterSlides3-displacementValue3;

	if(counterSlides3<-displacementValue3*offsideColumns3){
		counterSlides3=0;
	}

var contSlidercards3 = document.getElementById("cards3");

contSlidercards3.style.marginLeft=counterSlides3+"%";

}


function atras3(){

	updateDisplacementValue3();

	counterSlides3= counterSlides3+displacementValue3;

	if(counterSlides3>0){
		counterSlides3=-displacementValue3*offsideColumns3;
	}
var contSlidercards3 = document.getElementById("cards3");
contSlidercards3.style.marginLeft=counterSlides3+"%";
}

// Zona Primavera a la Ciutat

  
var displacementValue4;
var offsideColumns4;


function updateDisplacementValue4(){
	if (window.matchMedia("(max-width: 576px)").matches) {
	  console.log("-834");
	  displacementValue4 = 100;
	  offsideColumns4=4;

	} else if (window.matchMedia("(max-width: 834px)").matches){
	  console.log(">576 - <834");
	  displacementValue4 = 50;
	  offsideColumns4=3;
	}

	else {
	  console.log("+834");
	  displacementValue4 = 78.5;
	  offsideColumns4=2;
	}

}

var counterSlides4=0;

function adelante4(){

	updateDisplacementValue4();

	counterSlides4= counterSlides4-displacementValue4;

	if(counterSlides4<-displacementValue4*offsideColumns4){
		counterSlides4=0;
	}

var contSlidercards4 = document.getElementById("cards4");

contSlidercards4.style.marginLeft=counterSlides4+"%";

}


function atras4(){

	updateDisplacementValue4();

	counterSlides4= counterSlides4+displacementValue4;

	if(counterSlides4>0){
		counterSlides4=-displacementValue4*offsideColumns4;
	}
var contSlidercards4 = document.getElementById("cards4");
contSlidercards4.style.marginLeft=counterSlides4+"%";
}






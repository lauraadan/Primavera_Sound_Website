// MENU OCULTO CON SCROLL

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
	
		if (!window.matchMedia("(max-width: 768px)").matches) {
	  		console.log("melon");
			let Desplazamiento_Actual = window.pageYOffset;
			if(ubicacionPrincipal >= Desplazamiento_Actual){
				document.getElementById('navbar').style.top ='0';
			}
			else{
				document.getElementById('navbar').style.top ='-240px';
			}
			ubicacionPrincipal = Desplazamiento_Actual;
	
		document.getElementById("navbar").style.position="fixed";

	}

	else {
		document.getElementById("navbar").style.position="absolute";
	}




}



$(document).ready(function(){
	ajustItens();
});

window.addEventListener("resize", ajustItens);

function ajustItens(){
	if($(window).width() < 768){
		$("body").toggleClass("container", false);
	}else{
		//document.getElementById("body").className="container";
		$("body").toggleClass("container", true);
	}	
}
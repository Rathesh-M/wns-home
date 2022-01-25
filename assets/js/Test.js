$(document).ready(function(){
	$("#disapperar").click(function(){
		$("p:last").hide();
	});
	$("#appear").click(function(){
		$("p:last").show();
	});
		$("#Toggle").click(function(){
		$("p:first").toggle(1000);
	});

});

$(document).ready(function(){

	$("#fadetoggle").click(function(){
			$("#redbox").fadeToggle();
			$("#bluebox").fadeToggle(1000);
			$("#greenbox").fadeToggle(2000);
		});
});



	$("#startanimate").click(function(){
		var common= $("#animatebox");
		common.animate({height:'300px',opacity:'0.5'},"slow");
		common.animate({width:'300px',opacity:'0.8'},"slow");
		common.animate({height:'100px',opacity:'0.5'},"slow");
		common.animate({width:'100px',opacity:'0.8'},"slow");
});



const x= (x,y) => {
	return x * y
};

document.getElementbyId(#).innerHtml=x(5,5);
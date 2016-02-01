$(document).ready(function() {
	
	// popup
	$(".popup .popup_close").click(function(e){
		e.preventDefault();
		disablePopup();
	});
	
	$(".popup_bg").click(function(){
		disablePopup();
	});
	
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	}); 

	$(".footer-right a").click(function(e){ 
		e.preventDefault();
		loadPopup('.js_trademark');
	});  


});




var popupStatus = 0;

function loadPopup(popup){  
	if(popupStatus==0){
		$(".popup_bg").fadeIn("slow");
		$(popup).fadeIn("slow");
		var popupTop = $(window).scrollTop() + 50;
		console.log(popupTop);
		$(popup).css({ top : popupTop + 'px'});
		$('body').addClass('bluer')
		popupStatus = 1;
	}
}
	
function disablePopup(){ 
	if(popupStatus==1){
		$(".popup_bg").fadeOut("slow");
		$(".popup").fadeOut("slow");
		$('body').removeClass('bluer')
		popupStatus = 0;
	}
} 



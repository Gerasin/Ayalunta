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



	var inp_but_text = $('.inp_but_text').val()
	console.log(inp_but_text);
	$('.inp_but_minus').click(function() {
		if ( inp_but_text > 0 ) {
			inp_but_text = --inp_but_text;
			$('.inp_but_text').val(inp_but_text);
		}
		$('.maika_bascet_message').animate({ top : 39 }, 1000);
		return false;
	});
	$('.inp_but_plus').click(function() {
		inp_but_text = ++inp_but_text;
		$('.inp_but_text').val(inp_but_text);
		$('.maika_bascet_message').animate({ top : 39 }, 1000);
		return false;
	});
	
	$('.maika_size_namber span').click(function() {
		$('.maika_size_list').fadeIn();
		$('.maika_bascet_message').animate({ top : 39 }, 1000);
	});
	
	$('.maika_size_list a').click(function() {
		$('.maika_size_list a').removeClass('active');
		$(this).addClass('active');
		$('.maika_size_namber span').text($(this).text());
		$('.maika_size_list').fadeOut();
		return false;
	});
	
	$('.maika_price_but').click(function() {
		$('.maika_bascet_message').animate({ top : 72 }, 1000);
		return false;
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



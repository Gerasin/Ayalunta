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
	
	$('.inp_but_minus').click(function() {
		if ( inp_but_text > 0 ) {
			inp_but_text = --inp_but_text;
			$('.inp_but_text').val(inp_but_text);
		}
		$('.maika_bascet_message').animate({ top : 39 }, 500);
		return false;
	});
	$('.inp_but_plus').click(function() {
		inp_but_text = ++inp_but_text;
		$('.inp_but_text').val(inp_but_text);
		$('.maika_bascet_message').animate({ top : 39 }, 500);
		return false;
	});
	
	$('.maika_size_namber span').click(function() {
		$('.maika_size_list').fadeIn();
		$('.maika_bascet_message').animate({ top : 39 }, 500);
	});
	
	$('.maika_size_list a').click(function() {
		$('.maika_size_list a').removeClass('active');
		$(this).addClass('active');
		$('.maika_size_namber span').text($(this).text());
		$('.maika_size_list').fadeOut();
		return false;
	});
	
	$('.maika_price_but').click(function() {
		$('.maika_bascet_message').animate({ top : 72 }, 500);
		return false;
	});


	// Количество товара
	$('.quantity-plus').click(function(){
		var inpuNamber = $(this).parent().find('input').val();
		inpuNamber = ++inpuNamber;
		$(this).parent().find('input').val(inpuNamber);
		return false;
	});
	$('.quantity-minus').click(function(){
		var inpuNamber = $(this).parent().find('input').val();
		inpuNamber = --inpuNamber;
		if(inpuNamber <= 0) {
			inpuNamber = 1;
		}
		$(this).parent().find('input').val(inpuNamber);
		return false;
	});


	// Табы доставки
	$('.delivery-item:not(:first)').hide()

	$('.express_delivery td').click(function(){
		var trIndex = $(this).parents('tr').index();
		trIndex = ++trIndex;
		$(this).parents('.express_delivery').next('input').val(trIndex);
		$('.express_delivery tr').removeClass('active');
		$(this).parents('tr').addClass('active');
	});
	$('.delivery-tab a').click(function(){
		$('.delivery-tab li').removeClass('active');
		$(this).parent('li').addClass('active');
		var tabOpen = $(this).attr('href');
		$('.delivery-item').hide();
		$(tabOpen).show();
		return false;
	});

	$('.pay-select a').click(function(){
		$('.pay-select a').removeClass('active');
		$(this).addClass('active');
		var payIndex = $(this).index();
		payIndex = ++payIndex;
		$(this).parent().find('input').val(payIndex);
		return false;
	})

	


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



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

	$(".oferta_link").click(function(e){ 
		e.preventDefault();
		loadPopup('.popup_oferta_in');
	}); 

	if($('.scroll-pane').length){
		$('.scroll-pane').jScrollPane({
			autoReinitialise : true,
			autoReinitialiseDelay : 1000
		})
	};


	var bodyHeight = $(window).height() - 340;
	$('.basket-shop').css({'min-height' : bodyHeight})
	

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
	});



	// Валидация формы
	$('.js-valid').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
			errorLnk();
		}
	});
	$('.js-phone').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 18) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
			errorLnk();
		}
	});
	$('.js-valid-mail').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			$(this).addClass('error-inp');
		} else {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).removeClass('error-inp');
                $(this).parents('.form-inp').removeClass('item-error');
                errorLnk();
            } else {
               	$(this).addClass('error-inp');
            }
		}
	});
	$('.js-valid-home').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 1) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
			errorLnk();
		}
	});

	if($('.js-phone').length) {
		$('.js-phone').mask("+7 (000) 000-00-00", {placeholder: "+7 (___) ___-__-__"});
	};

	if($('.js-valid-home').length) {
		$('.js-valid-home').mask("0000", {placeholder: ""});
	};

	

	$('.js-valid, .js-valid-mail, .js-phone').keyup(function(){
		errorLnk()
	})
	

	// Чек оферты
	$('.oferta input, .oferta label').click(function(){
		if($('.oferta input').prop("checked")) {
			$('.basket-shop-nav').addClass('active');
		} else {
			$('.basket-shop-nav').removeClass('active');
		}
	})
	


});


function errorLnk() {
	var validError = 0;
	$('.js-valid').each(function(){
		var validText = $(this).val().length;
		if(validText < 2) { validError = ++validError } else {
			$(this).removeClass('error-inp');
		}
	});
	$('.js-valid-home').each(function(){
		var validText = $(this).val().length;
		if(validText < 1) { validError = ++validError } else {
			$(this).removeClass('error-inp');
		}
	});
	$('.js-phone').each(function(){
		var validText = $(this).val().length;
		if(validText < 18) { validError = ++validError } else {
			$(this).removeClass('error-inp');
		}
	});

	$('.js-valid-mail').each(function(){
		var validText = $(this).val().length;
		if(validText < 2) { validError = ++validError } else {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).removeClass('error-inp');
            } else {
               	validError = ++validError
            }
		}
	});
	if(validError == 0) {
		$('.val-btn').addClass('active');
	} else {
		$('.val-btn').removeClass('active');
	}

}




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



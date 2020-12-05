

(function($){
	const siteIndicator = $('#siteIndicator');
	const indiLi = siteIndicator.find('li');
	const indiLiA = indiLi.find('a');
	const wrap = $('#wrap');
	const reserveBox = $('#reserveBox');
	const inquiryBox = $('#inquiryBox');
	const checkinBox = $('#checkinBox');
	const timeBox = $('#timeBox');
	const eventBox = $('#eventBox');

	indiLiA.on('click',function(e){
		// e.preventDefault();
		indiLi.removeClass('on');
		$(this).parent('li').addClass('on');
	});



})(jQuery);
(function($){
 const wrap = $('#wrap');
 const gnb = $('.gnb');
 const gnbLi = gnb.children('ul').children('li'); //
 const gnbLiLink = gnbLi.children('a');
 const gnbConts = gnb.find('.gnb_conts');
 const gnbLine = gnb.find('.gnbline'); //
 const gnbLiOff = []; //
 const gnbOff = gnb.offset().left; //

 // console.log(gnbConts.length);
 //console.log(gnbOff);

 for(let i=0; i<gnbLi.length; i++){ //
 	gnbLiOff[i] = gnbLi.eq(i).offset().left;	
 }
 	//console.log(gnbLiOff);
	//console.log(gnbOff);


 gnbLiLink.on('mouseenter focus',function(){
 	gnbConts.stop().slideUp();
 	$(this).next('.gnb_conts').stop().slideDown();
 	gnbLine.stop().fadeIn();

 	let i = $(this).parent('li').index();
 	// console.log(i);
	let myOf = (gnbLiOff[i] - gnbOff) +'px';
	gnbLine.stop().animate({left:myOf});
 });

 gnb.on('mouseleave',function(){
 	gnbConts.stop().slideUp();
 	gnbLine.stop().fadeOut();
 });
 
})(jQuery);
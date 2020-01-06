(function($){

 const gnb = $('.gnb');
 const gnbLiLink = gnb.children('ul').children('li').children('a');
 const gnbConts = gnb.find('.gnb_conts');

 gnbLiLink.on('mouseenter focus',function(){
 	gnbConts.stop().slideUp();
 	$(this).next('.gnb_conts').stop().slideDown();
 });

 gnbConts.on('mouseleave',function(){
 	gnbConts.stop().slideUp();
 });
})(jQuery);
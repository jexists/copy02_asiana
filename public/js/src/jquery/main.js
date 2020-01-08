// main.js

(function($){
	const body = $('body'),
		  wrap = $('#wrap'),
		  headBox = $('#headBox'),
		  footBox = $('#footBox'),
		  reserveBox = $('#reserveBox');
// inquiryBox
// checkinBox
// timeBox
// eventBox

	// wrap.append('<section id="viewBox"></section>');
	// const viewBox = $('#viewBox');

	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/jquery/${temp}.js"></script>`);
	};

	headBox.load('./temp/headbox.html',function(){
		JsLink('headbox')
	});
	reserveBox.load('./temp/reservebox.html');

	footBox.load('./temp/footbox.html');
})(jQuery);
// main.js

(function($){
	const body = $('body');
	const wrap = $('#wrap');
	const headBox = $('#headBox');
	const footBox = $('#footBox');

	// wrap.append('<section id="viewBox"></section>');
	// const viewBox = $('#viewBox');

	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/jquery/${temp}.js"></script>`);
	};

	headBox.load('./temp/headbox.html',function(){
		JsLink('headbox')
	});

	footBox.load('./temp/footbox.html');
})(jQuery);
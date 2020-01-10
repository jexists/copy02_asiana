

(function($){
	const mainSlide = $('.main_slide');
	const slideUl = mainSlide.children('ul');
	const slideLi = slideUl.children('li');
	const mainIndi = mainSlide.children('.main_indicator');
	const indiUl = mainIndi.children('ul');
	const indiLi = indiUl.children('li');
	const indiLiA = indiLi.children('a');
	const psBtn = mainIndi.children('.ps');
	const stopBtn = psBtn.children('.pause').children('button');
	const playBtn = psBtn.children('.play').children('button');

	let i = 0;
	let timed = 5000; 
	function SlideFn(i){
		slideLi.css({zIndex:0});
		slideLi.eq(i).css({zIndex:5});
		indiLi.removeClass('slide_on');
		indiLi.eq(i).addClass('slide_on');
	}
	indiLiA.on('click',function(e){
		e.preventDefault();
		i = $(this).parent('li').index();
		SlideFn(i);
	});

	let j,n;

	let go;
	const SlideGo = function(){
		go = setInterval(function(){
			i++;
			if(i>5){i=0};
			// console.log(i);
			SlideFn(i);
	},timed);
	}

	let SlideStop = function(){
		clearInterval(go);
	};
	SlideGo();

	psBtn.find('button').on('click',function(e){
		e.preventDefault();
		let hasCl = $(this).parent('div').hasClass('pause'); 
		if (hasCl){
			stopBtn.parent('div').fadeOut(0,function(){
				playBtn.parent('div').show();
			});
			SlideStop();
		}else{
			playBtn.parent('div').fadeOut(0,function(){
				stopBtn.parent('div').show();
			});
			SlideGo()
		}
	});

})(jQuery);


/*	psBtn.find('button').on('click',function(e){
		e.preventDefault();
		j = $(this).parent('div').index()
		n = 0;
		if (j === 1){n=1}
		psBtn.children('div').eq(j).fadeOut(0,function(){
			psBtn.children('div').eq(n).siblings().show();
		});
		// $(this).parent('div').fadeOut();
		// $(this).parent('div').siblings().fadeIn();
	})*/
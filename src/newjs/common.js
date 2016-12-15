$(document).ready(function(){
	$.get('/common/header.html',function(data){
		$('.main').before($(data	));
		if(/jz\.html/.test(document.URL)){
			$('.banner').remove();
		}
	})
	$.get('/common/footer.html',function(data){
		$('.main').after($(data	))
		if(/jz\.html/.test(document.URL)){
			$('.footer-brand').html('优树科技');
		}
	})
	$.get('/common/cebian.html',function(data){
		$(data).appendTo($('.main'))
	});
	$.get('/common/menu.html',function(data){
		$(data).appendTo($('.menu'))
	})
	$('.qhm').find('.qhm-items').each(function(i,ele){
		$(ele).hover(function(){
			$(this).addClass('active');
			$('.qhm').find('.qhm-items').not(this).removeClass('active');
		},function(){
			$('.qhm').find('.qhm-items').not(this).removeClass('active');
		})
	})
	$('.main').scrollactive();
	items($('.main'),'*');
	$('.card-area').find('li').mouseover(function(){
		$('.card-area').find('li').not(this).removeClass('active');
		$(this).addClass('active');

	})
	scaleVideoContainer();

	initBannerVideoSize('.video-container .poster img');
	initBannerVideoSize('.video-container .filter');
	initBannerVideoSize('.video-container video');
	$('.carousel').carousel({
		interval: 2000
	})
	$(window).on('resize', function() {
		scaleVideoContainer();
		scaleBannerVideoSize('.video-container .poster img');
		scaleBannerVideoSize('.video-container .filter');
		scaleBannerVideoSize('.video-container video');
	});
	$('.four-inner ul li').hover(function(){
		$('.four-box').css('display','none')
		$(this).next().stop().fadeIn()
	})

	$('.weixin-fa').hover(function(){
		$('.weixin-fa>a>i').css('left','50px')
		$('.weixin-pic img').fadeIn()},function(){
		$('.weixin-pic img').fadeOut();
	})

	$('.move-dianhua').hover(function(){
		$('.move-dianhua-poc').stop().animate({'left':'130px'})
	},function(){
		$('.move-dianhua-poc').stop().animate({'left':'0px'})
	})
})

function items(par,tag,animName){
	var animates=['rotate','pulse','swing','rubberBand','shake','tada','wobble'];

	par.delegate(tag,'mouseover',function(even){

		if($(this).hasClass('animated')){
			$(this).addClass(animates[Math.floor(Math.random()*animates.length)])
		}
	});
	par.delegate(tag,'mouseout',function(even){
		if($(this).hasClass('animated')){
			$(this).attr('class','animated');
		}
	});
}


function scaleVideoContainer() {

	var height = $(window).height() + 5;
	var unitHeight = parseInt(height) + 'px';
	$('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

	$(element).each(function(){
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});

	scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

	var windowWidth = $(window).width(),
		windowHeight = $(window).height() + 5,
		videoWidth,
		videoHeight;

	console.log(windowHeight);

	$(element).each(function(){
		var videoAspectRatio = $(this).data('height')/$(this).data('width');

		$(this).width(windowWidth);

		if(windowWidth < 1000){
			videoHeight = windowHeight;
			videoWidth = videoHeight / videoAspectRatio;
			$(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

			$(this).width(videoWidth).height(videoHeight);
		}

		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	});
}








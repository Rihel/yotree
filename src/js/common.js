$(document).ready(function(){
	$('.main').scrollactive();
	items($('.main'),'*');
})

function items(par,tag,animName){
	var animates=['bounce','pulse','swing','rubberBand','shake','tada','wobble','jello'];

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
;(function($,win,doc,underfine){
	var menth={
		init:function(self,opt){
			var warp=$(self).find('.car-warp');
			var view=$(self).find('.car-view');
			var title=$(self).find('.car-titles')
			view.find('li.car-img').eq(0).fadeIn()
			var control=$(self).find('.car-control');
			menth.controlInit(control,view,opt,title);

			if(opt.auto){
				menth.autoplay(view,control,opt,title)
			}
		},
		imgSize:function(view){
			return $(view).find('.car-img').length;
		},
		getTitles:function(view,opt){
			if(opt.titles.length===0){
				$(view).find('.car-img').each(function(i,ele){
					opt.titles.push($(ele).attr('data-title'))
				});
				return opt.titles;
			}else {
				return opt.titles
			}
		},
		autoplay:function(view,control,opt,title){
			var i=opt.active;
			var corl=control.find('li');
			var viewItem=view.find('.car-img');
			var size=viewItem.length;
			setInterval(function(){
				if(i<size){
					viewItem.fadeOut();
					viewItem.eq(i).fadeIn();
					corl.removeClass('active');
					corl.eq(i).addClass('active');
					menth.text(view,i,title,opt)
					i++;
				}else {
					i=0;
				}
			},opt.time)
		},
		controlInit:function(control,view,opt,title){
			var size=menth.imgSize(view);
			var str='';
			for(var i=0;i<size;i++){
				str+='<li>'+(i+1)+'</li>'
			};
			control.html(str);
			control.find('li').eq(0).addClass('active');
			menth.hover(control,view,opt,title);
		},
		hover:function(control,view,opt,title){
			control.delegate('li','mouseover',function(){
				$(view).find('li.car-img').css('zIndex',8).fadeOut(300);
				$(control).find('li').removeClass('active');
				$(this).addClass('active');
				$(view).find('li.car-img').eq($(this).index()).css('zIndex',9).fadeIn(300);
				opt.active=$(this).index();
				menth.text(view,opt.active,title,opt)
			})
		},
		text:function(view,i,titlecon,opt){
			var a=menth.getTitles(view,opt);
			$(titlecon).html(a[i]);
		}
	}
	$.fn.caro=function(options){
		var def={
			active:0,
			time:4000,
			titles:[]
		};
		this.settings=$.extend({},def,options);
		return menth.init(this,this.settings);
	}
}(jQuery,window,document));
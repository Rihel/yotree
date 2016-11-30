((function($,win,doc,underfine){
	var meath={
		isSee:function(obj){
			var imgh=$(obj).offset().top+50,
				scrolh=$(win).scrollTop(),
				winh=$(win).height();
			return scrolh+winh>imgh;
		},
		isImg:function(obj){
				return $(obj)[0].tagName.toLowerCase()==='img'?true:false;
		},
		init:function(self,opt){
			$('body').find('img').addClass('items')
			var items=self.find('.items');

			$(items).each(function(i,ele){
				if(meath.isSee($(ele))&&!$(ele).hasClass('active')){
					if(meath.isImg(ele)){
						var url=$(ele).attr('asrc');
						$(ele).attr('src',url)
					}
					$(ele).addClass('active');
				}
			})
				$(win).scroll(function(){
					$(items).each(function(i,ele){
						if(meath.isSee($(ele))&&!$(ele).hasClass('active')){
							if(meath.isImg(ele)){
								var url=$(ele).attr('asrc');
								$(ele).attr('src',url)
							}
							$(ele).addClass('active');
						}
					})
				});
		},
	}
	$.fn.scrollactive=function(options){
		var def={

		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
})(jQuery,window,document));
var root=$('#uigt');
var timer=setInterval(function(){
	if(root.parent().hasClass('active')){
		go();
		clearInterval(timer);
	}
},20)







function go(){

	var textBall = [
		{text : 'UI交互\n设计师', w : 120, bg : '#30bfa9', x : 24, y : 192},
		{text : '界面\n设计', w : 90, bg : '#e3688b', x : 159, y : 19},
		{text : '网站\n设计', w : 112, bg : '#5f93da', x : 212, y : 272},
		{text : 'UE用户\n体验设计师', w : 136, bg : '#f0435c', x : 82, y : 420},
		{text : 'PM产品\n经理', w : 132, bg : '#3dbde3', x : 836, y : 1},
		{text : '项目\n经理', w : 116, bg : '#d25ba1', x : 698, y : 196},
		{text : '资深\n专家', w : 118, bg : '#90a841', x : 802, y : 350},
		{text : '网站\n架构师', w : 106, bg : '#58abf0', x : 1012, y : 346},
		{text : '人体\n交互', w : 90, bg : '#d49320', x : 1062, y : 183}

	];
	var bgBall = [
		{w : 26, bg : '#dd96a7', x : 266, y : 155},
		{w : 50, bg : '#a0a0a0', x : 356, y : 202},
		{w : 12, bg : '#b4cb50', x : 406, y : 294},
		{w : 18, bg : '#ffc699', x : 402, y : 393},
		{w : 20, bg : '#a0a0a0', x : 354, y : 457},
		{w : 54, bg : '#94d4e9', x : 535, y : 430},
		{w : 14, bg : '#94d4e9', x : 642, y : 129},
		{w : 42, bg : '#a2e0bc', x : 737, y : 122},
		{w : 30, bg : '#ffc699', x : 680, y : 391},
		{w : 28, bg : '#ffc699', x : 892, y : 273}
	]
	var textline = [];
	var bbline = [];
	var draw = SVG('uigt').size(1200, 567);
	var rect = draw.rect(1200, 567).attr('fill', '#dacbff');
// create path
	var path = draw.path('M84 252').attr({'fill' : 'none', stroke : '#a89cc4', 'stroke-width' : '2'}).addClass('paths')

// animate path
	var paths = '';
	for(var i = 0; i < textBall.length; i++) {
		var cir = {
			cx : textBall[i].x + Math.floor(textBall[i].w / 2),
			cy : textBall[i].y + Math.floor(textBall[i].w / 2)

		}
		textline.push(cir);


	}

	for(var i = 0; i < bgBall.length; i++) {
		var cir = {
			cx : bgBall[i].x + Math.floor(bgBall[i].w / 2),
			cy : bgBall[i].y + Math.floor(bgBall[i].w / 2)

		}
		/*   paths+=' L'+dian.x1.toString()+' '+dian.y1+' L'+dian.x2+' '+dian.y2+'   ';*/
		bbline.push(cir);

	}
	console.log(bbline);
	paths+='L '+textline[0].cx+' '+textline[0].cy+' ' +
		'L '+textline[1].cx+' '+textline[1].cy+' '+
		'L '+textline[1].cx+' '+textline[1].cy+' '+
		'L '+bbline[0].cx+' '+bbline[0].cy+' '+
		'L '+bbline[6].cx+' '+bbline[6].cy+' '+
		'L '+bbline[7].cx+' '+bbline[7].cy+' '+
		'L '+textline[4].cx+' '+textline[4].cy+' '+
		'L '+textline[8].cx+' '+textline[8].cy+' '+
		'L '+textline[7].cx+' '+textline[7].cy+' '+
		'L '+textline[6].cx+' '+textline[6].cy+' '+
		'L '+bbline[8].cx+' '+bbline[8].cy+' '+
		'L '+bbline[5].cx+' '+bbline[5].cy+' '+
		'L '+bbline[3].cx+' '+bbline[3].cy+' '+
		'L '+bbline[4].cx+' '+bbline[4].cy+' '+
		'L '+textline[2].cx+' '+textline[2].cy+' '+
		'L '+textline[3].cx+' '+textline[3].cy+' '+
		'L '+textline[0].cx+' '+textline[0].cy+' '+
		'M '+bbline[0].cx+' '+bbline[0].cy+' '+
		'L '+textline[2].cx+' '+textline[2].cy+' '+
		'M '+bbline[0].cx+' '+bbline[0].cy+' '+
		'L '+textline[0].cx+' '+textline[0].cy+' '+
		'M '+bbline[0].cx+' '+bbline[0].cy+' '+
		'L '+bbline[1].cx+' '+bbline[1].cy+' '+
		'L '+bbline[2].cx+' '+bbline[2].cy+' '+
		'L '+bbline[3].cx+' '+bbline[3].cy+' '+
		'M '+bbline[9].cx+' '+bbline[9].cy+' '+
		'L '+textline[4].cx+' '+textline[4].cy+' '+
		'M '+bbline[9].cx+' '+bbline[9].cy+' '+
		'L '+textline[5].cx+' '+textline[5].cy+' '+
		'M '+textline[5].cx+' '+textline[5].cy+' '+
		'L '+bbline[8].cx+' '+bbline[8].cy+' '+
		'M '+textline[5].cx+' '+textline[5].cy+' '+
		'L '+bbline[7].cx+' '+bbline[7].cy+' '+
		'M '+bbline[9].cx+' '+bbline[9].cy+' '+
		'L '+textline[6].cx+' '+textline[6].cy+' '+
		'M '+bbline[9].cx+' '+bbline[9].cy+' '+
		'L '+textline[7].cx+' '+textline[7].cy+' '

	path.attr({d:path.attr('d')+paths})

	var node = document.querySelector('.paths');

	var length = node.getTotalLength();

	var style = document.createElement('style');
	style.innerHTML = '.paths{stroke-dasharray: ' + length + ';stroke-dashoffset: ' + length + ';animation: dash 1 5s linear 0.5s forwards;}';
	document.head.appendChild(style);
	for(var i = 0; i < textBall.length; i++) {

		var item = textBall[i];
		var nested = draw.nested();
		var group = nested.group();

		var circle = group.circle(item.w).attr({'fill' : '#dacbff'}).animate(500, '<', 200 * i).attr({


			'cx'   : item.x + Math.floor(item.w / 2),
			'cy'   : item.y + Math.floor(item.w / 2)
		}).animate(500,'<',0).attr({'fill':item.bg});
		var text = group.text(item.text ).font({
			textLength : 60,
			fill       : '#dacbff'
		}).animate(500, '<', 200 * i).attr({
			'x' : item.x + Math.floor(item.w / 2 / 2),
			'y' : item.y + Math.floor(item.w / 2 / 2),
			'fill':'#fff'
		});

	}
	for(var i = 0; i < bgBall.length; i++) {
		var item = bgBall[i];
		var nested = draw.nested();
		var group = nested.group();
		draw.circle(bgBall[i].w).attr({'fill' : '#dacbff'}).animate(500,'<',200*i).attr({
			'cx'   : bgBall[i].x + Math.floor(bgBall[i].w / 2),
			'cy'   : bgBall[i].y + Math.floor(bgBall[i].w / 2)
		}).animate(500,'>',0).attr({'fill':bgBall[i].bg});

	}
	draw.text('UI').attr({
		x:498,
		y:100,
		fill:'#dacbff',

	}).font({
		family:'微软雅黑',
		size:180,
		weight:'bold'
	}).animate(500,'>',3000).attr({'fill':'#f0435c'})
}


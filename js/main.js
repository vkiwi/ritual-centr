var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('#top').fadeIn(900);
		}else{
			$('#top').fadeOut(700);
		}
	});
});

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});

jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');	
	    }
    });
    
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});

//плавный переход 
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибутом href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(){
	$("#header").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибутом href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//МАСКА ДЛЯ ВВОДА ТЕЛЕФОНА
$(document).ready(function(){

	$('.phone').mask('+7 (999) 999-99-99')

});

/**
 * Скрипт скроллинга: кнопка наверх
 * css class кнопки: scrollTop
 */

window.top = {};
var sc = window.top;

sc.time = 12; // время прокручивания

sc.goTop = function (time, acceleration) {
	acceleration = acceleration || 0.1;
	time = time || sc.time;

	var dx = 0;
	var dy = 0;
	var bx = 0;
	var by = 0;
	var wx = 0;
	var wy = 0;

	if (document.documentElement) {
		dx = document.documentElement.scrollLeft || 0;
		dy = document.documentElement.scrollTop || 0;
	}
	if (document.body) {
		bx = document.body.scrollLeft || 0;
		by = document.body.scrollTop || 0;
	}
	var wx = window.scrollX || 0;
	var wy = window.scrollY || 0;

	var x = Math.max(wx, Math.max(bx, dx));
	var y = Math.max(wy, Math.max(by, dy));

	var speed = 1 + acceleration;
	window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
	if(x > 0 || y > 0) {
		var invokeFunction = "window.top.goTop("+ time +")"
		window.setTimeout(invokeFunction, time);
	}
	return false;
}

sc.showHide = function (){
	var a = document.getElementById('gotop');

	if( ! a ){
		// если нет элемента добавляем его
		var a = document.createElement('a');
		a.id = "gotop";
		a.className = "scrollTop";
		a.href = "#";
		a.style.display = "none";
		a.style.position = "fixed";
		a.style.zIndex = "9999";
		a.onclick = function(e){ e.preventDefault(); window.top.goTop(); }
		document.body.appendChild(a);
	}

	var stop = (document.body.scrollTop || document.documentElement.scrollTop);
	if( stop > 300 ){
		a.style.display = 'block';
		sc.smoothopaque(a, 'show', 30, false);
	} else {
		sc.smoothopaque(a, 'hide', 30, function(){a.style.display = 'none';});
	}

	return false;
}

// Плавная смена прозрачности
sc.smoothopaque = function (el, todo, speed, endFunc){
	var 
	startop = Math.round( el.style.opacity * 100 ),
	op = startop,
	endop = (todo == 'show') ? 100 : 0;

	clearTimeout( window['top'].timeout );

	window['top'].timeout = setTimeout(slowopacity, 30);

	function slowopacity(){
		if( startop < endop ){
			op += 5;
			if( op < endop )
				window['top'].timeout = setTimeout(slowopacity, speed);
			else
				(endFunc) && endFunc();
		}
		else {
			op -= 5;
			if( op > endop ){
				window['top'].timeout = setTimeout(slowopacity, speed);
			}
			else
				(endFunc) && endFunc();
		}

		// установка opacity
		el.style.opacity = (op/100);
		el.style.filter = 'alpha(opacity=' + op + ')';
	}
}

if (window.addEventListener){
	window.addEventListener("scroll", sc.showHide, false);
	window.addEventListener("load", sc.showHide, false);
}
else if (window.attachEvent){
	window.attachEvent("onscroll", sc.showHide);
	window.attachEvent("onload", sc.showHide);
}

//загрузка карты после докрутки
$(document).ready(function(){
  var brif = $('.about');
  var brifTop = brif.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop >= brifTop) {
      console.log('докрутили');
      $('#map').html('<script class="map-m" type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7cc229803eddb2bd7a76724689b30d2b71dfb2074dd87195a1fd352bd6af04f6&amp;width=100%&amp;height=520&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  });
});
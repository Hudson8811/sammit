$(document).ready(function() {

	$('.click').on('click', function() {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});

	$('.hero').addClass('active');
	
	/* calculator (select) */
	var calculator__input1 = $("#calculator__input1");
	var calculator__dropdown1 = $("#calculator__dropdown1");
	var calculator__dropdown1_item = $(".calculator__dropdown1-item");

	calculator__input1.click(function(){
		calculator__dropdown1.toggle();
		calculator__input1.closest('.calculator__input-wrapper').toggleClass('open');
	});
	calculator__dropdown1_item.click(function(){
		calculator__input1.val($(this).text());
		calculator__dropdown1.toggle();
		calculator__input1.closest('.calculator__input-wrapper').toggleClass('open');
	});
	
	
	var calculator__input2 = $("#calculator__input2");
	var calculator__dropdown2 = $("#calculator__dropdown2");
	var calculator__dropdown2_item = $(".calculator__dropdown2-item");
	calculator__input2.click(function(){
		calculator__dropdown2.toggle();
	});
	calculator__dropdown2_item.click(function(){
		calculator__input2.val($(this).children('.calculator__dropdown2-num').text());
		calculator__dropdown2.toggle();
	});

	$(function() {
		$('.calculator__btn').click(function() {
			card_calculator_id = $(this).attr('href');
			card_calculator = $(card_calculator_id);
					
			$('.card-calculator').removeClass('active');
			$(card_calculator).toggleClass('active');
			$('.calculator__btn').removeClass('active');
			$(this).addClass('active');
			$('.calculator-hidden-info').slideUp(0);
		});
	});

	$('.card-calculator__btn-schedule').click(function(){
		$('.calculator-hidden-info').toggle();
	});


	/* calculator-popup */
	$('.btn-application').click(function(){
		$('.popup-application').addClass('active');
	});
	$('.popup-application .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-application .popup__close').click(function(){
		$('.popup-application').removeClass('active');
	});
	$('.popup-application .popup__bg').click(function(){
		$('.popup-application').removeClass('active');
	});


	/* review-popup */
	$('.reviews__btn.btn-orange').click(function(){
		$('.popup-reviews').addClass('active');
	});
	$('.popup-reviews .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-reviews .popup__close').click(function(){
		$('.popup-reviews').removeClass('active');
	});
	$('.popup-reviews .popup__bg').click(function(){
		$('.popup-reviews').removeClass('active');
	});


	/* form */
	$('.form__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
});



/* about */
var swiper = new Swiper(".about__swiper2", {
	spaceBetween: 10,
	allowTouchMove: false,
	effect: 'fade',
});
var swiper2 = new Swiper(".about__swiper", {
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	spaceBetween: 10,
	thumbs: {
		swiper: swiper,
	},
});

$(document).ready(function() {
	$(function() {
		$('.chart__btn').click(function() {
			chart_id = $(this).attr('href');
			chart = $(chart_id);
			
			$('.chart__img').removeClass('active');
			$(chart).toggleClass('active');
			$('.chart__btn').removeClass('active');
			$(this).addClass('active');
		});
	});

	$('.reviews__btn.btn-white').click(function () {
		$('.reviews__item:hidden').show(100);
		$('.reviews__item:hidden').length < 1 ? $('.reviews__btn.btn-white').hide() : false;
	});
});



Fancybox.bind('[data-fancybox="gallery"]', {
	Thumbs: false,
	Toolbar: false,

	Image: {
		zoom: false,
		click: false,
		wheel: "slide",
	},
});
Fancybox.bind('[data-fancybox="gallery1"]', {
	Thumbs: false,
	Toolbar: false,

	Image: {
		zoom: false,
		click: false,
		wheel: "slide",
	},
});


/* faq */
$('.spoiler').click(function(){
	$(this).children('.spoiler__content').slideToggle();
	$(this).toggleClass('active');
});

/* news */
var swiper = new Swiper(".news__swiper", {
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
	slidesPerView: 1,
	breakpoints: {
		575: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: "auto",
		},
	},
});
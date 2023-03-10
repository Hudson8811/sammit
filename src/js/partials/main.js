
$(function () {
	function num_word(value, words){
		value = Math.abs(value) % 100;
		var num = value % 10;
		if(value > 10 && value < 20) return words[2];
		if(num > 1 && num < 5) return words[1];
		if(num == 1) return words[0];
		return words[2];
	}


	/* появление элементов при прокрутке */
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('show-active');
			}
		});
	}
	let options = {
		threshold: [0.5]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.show');
	for (let elm of elements) {
		observer.observe(elm);
	}



	$('.click').on('click', function () {

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

/*
	$('.js-calc-inp__range').each(function () {
		var $this = $(this);
		var wrap = $this.closest('.js-wrap-of-range-inp');
		var display = wrap.find('.js-display-area');
		var dd = wrap.find('.js-calculator-dropdown');
		var ddlist = dd.find('.calculator__dropdown-list');
		var displayPostfix = $this.attr('data-display-postfix');
		if(typeof displayPostfix === 'undefined'){
			displayPostfix='';
		}

		var min = parseInt($this.attr('data-min'));
		var max = parseInt($this.attr('data-max'));
		var step = parseInt($this.attr('data-step'));

		if(typeof min !== 'number' || isNaN(min)){
			min=1;
		}
		if(typeof max !== 'number' || isNaN(max)){
			max=1;
		}
		if(typeof step !== 'number' || !(step>0)){
			step=1;
		}

		var is_month = $this.attr('data-dd-list-type')==='месяцы';





		var handler = function (ionInstance) {
			var value = (ionInstance.from).toLocaleString(
				'ru-RU'
			);
			display.html(value + displayPostfix)
		};


		var ion = $(this).ionRangeSlider({
			hide_from_to: true,    // show/hide FROM and TO labels
			onChange: handler,
			onFinish: handler,
			onStart: handler,
			onUpdate: handler,
			extra_classes: 'ion-rs-customized-calc'
		}).data("ionRangeSlider");



		var i = min;

		console.log(min);
		console.log(max);
		console.log(step);
		while (i<=max) {
			ddlist.append('<li class="calculator__dropdown-item"><span class="calculator__dropdown-num">'+i.toLocaleString('ru-RU')+'</span>	<span class="calculator__dropdown-val">'+(is_month?num_word(i, ['месяц', 'месяца', 'месяцев']):'')+'</span>	</li>');
			console.log(i);
			i+=step;
		}

		display.on('click', function () {
			if(!wrap.hasClass('calc-inp--dd-open')){
				$('.calc-inp--dd-open').removeClass('calc-inp--dd-open')
				.find('.js-calculator-dropdown').fadeOut(150);



				dd.fadeIn(300);
				wrap.addClass('calc-inp--dd-open');
			}
			else{
				dd.fadeOut(300);
				wrap.removeClass('calc-inp--dd-open');
			}
		});

		ddlist.find('.calculator__dropdown-item').on('click', function () {
			ion.update({
				from: parseInt($(this).text().replace(/\D/g,''))
			});

			dd.toggle();
			wrap.toggleClass('calc-inp--dd-open');
		});

	});




	$(function () {
		$('.calculator__btn').click(function () {
			card_calculator_id = $(this).attr('href');
			card_calculator = $(card_calculator_id);

			$('.card-calculator').removeClass('active');
			$(card_calculator).toggleClass('active');
			$('.calculator__btn').removeClass('active');
			$(this).addClass('active');
			$('.calculator-hidden-info').slideUp(0);
		});
	});

	$('.card-calculator__btn-schedule').click(function () {
		$('.calculator-hidden-info').toggle();
	});


	// calculator-popup
	$('.btn-application').click(function () {
		$('.popup-application').addClass('active');
	});
	$('.popup-application .popup__agreement-agree').click(function () {
		$(this).toggleClass('active');
	});
	$('.popup-application .popup__close').click(function () {
		$('.popup-application').removeClass('active');
	});
	$('.popup-application .popup__bg').click(function () {
		$('.popup-application').removeClass('active');
	});
	*/


	/* rate-popup */
	$('.btn-rate1').click(function () {
		$('.popup-rate1').addClass('active');
	});
	$('.popup-rate1 .popup__agreement-agree').click(function () {
		$(this).toggleClass('active');
	});
	$('.popup-rate1 .popup__close').click(function () {
		$('.popup-rate1').removeClass('active');
	});
	$('.popup-rate1 .popup__bg').click(function () {
		$('.popup-rate1').removeClass('active');
	});

	$('.btn-rate2').click(function () {
		$('.popup-rate2').addClass('active');
	});
	$('.popup-rate2 .popup__agreement-agree').click(function () {
		$(this).toggleClass('active');
	});
	$('.popup-rate2 .popup__close').click(function () {
		$('.popup-rate2').removeClass('active');
	});
	$('.popup-rate2 .popup__bg').click(function () {
		$('.popup-rate2').removeClass('active');
	});

	$('.btn-rate3').click(function () {
		$('.popup-rate3').addClass('active');
	});
	$('.popup-rate3 .popup__agreement-agree').click(function () {
		$(this).toggleClass('active');
	});
	$('.popup-rate3 .popup__close').click(function () {
		$('.popup-rate3').removeClass('active');
	});
	$('.popup-rate3 .popup__bg').click(function () {
		$('.popup-rate3').removeClass('active');
	});


	/* review-popup */
	$('.reviews__btn.btn-orange').click(function () {
		$('.popup-reviews').addClass('active');
	});
	$('.popup-reviews .popup__agreement-agree').click(function () {
		$(this).toggleClass('active');
	});
	$('.popup-reviews .popup__close').click(function () {
		$('.popup-reviews').removeClass('active');
	});
	$('.popup-reviews .popup__bg').click(function () {
		$('.popup-reviews').removeClass('active');
	});


	/* form */
	$('.form__agreement-agree').click(function () {
		$(this).toggleClass('active');
	});


	/* about */
	var swiper = new Swiper(".about__swiper2", {
		spaceBetween: 10,
		allowTouchMove: false,
		effect: 'fade',
		autoHeight: true,

	});
	var swiper2 = new Swiper(".about__swiper", {
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		spaceBetween: 10,

		/*spaceBetween: 22,
		slidesPerView: 6.6,*/
		thumbs: {
			swiper: swiper,
		},
		scrollbar: {
			el: "#swiper-timeline-scrollbar",
			hide: true,
			draggable: true,
		}
	});

	$('.chart__btn').off().click(function (e) {
		e.preventDefault();
		chart_id = $(this).attr('href');
		chart = $(chart_id);

		$('.chart__img').removeClass('active');
		$(chart).toggleClass('active');
		$('.chart__btn').removeClass('active');
		$(this).addClass('active');
	});

	$('.reviews__btn.btn-white').click(function () {
		$('.reviews__item:hidden').show(100);
		$('.reviews__item:hidden').length < 1 ? $('.reviews__btn.btn-white').hide() : false;
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

	$('.js-doc__right-item--show-all-btn').on('click', function () {
		var $this = $(this);
		var next = $this.next();
		var parent = $this.closest('.doc__right-items');
		$this.remove();
		next.css('display', 'none').addClass('doc__right-item--default-shown').fadeIn(300);

		$needShowItems = parent.find('.doc__right-item:not(.doc__right-item--default-shown)');

		$needShowItems.slideDown(300, function () {
			$needShowItems.addClass('doc__right-item--shown');
		});

	});
});
/* faq */
/* $('.spoiler').click(function(){
	$(this).children('.spoiler__content').slideToggle();
	$(this).toggleClass('active');
}); */
$(function () {
	$('.spoiler__title').on('click', function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	/* news */
	var swiper = new Swiper(".news__swiper", {
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: true,
			draggable: true,
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

	Fancybox.bind('[data-fancybox-caption-in]', {
		groupAll: true, // Group all items
		Thumbs: false,
		Toolbar: false,

		Image: {
			zoom: false,
			click: false,
			wheel: "slide",
		},
		on: {
			"load": (event, fancybox, slide) => {
				var fb_content = $(fancybox.$content);
				var caption = fb_content.siblings('.fancybox__caption').html();
				console.log(caption);

				fb_content.siblings('.fancybox__caption').remove();
				fb_content.append('<div class="fancybox__caption">' + caption + '</div>');
			}
		},
		baseTpl:
			'<div class="fancybox-container" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-inner">' +
			'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
			'<div class="fancybox-toolbar">{{buttons}}</div>' +
			'<div class="fancybox-navigation">{{arrows}}</div>' +
			'<div class="fancybox-stage"></div>' +
			'</div>' +
			'</div>'
		,
		afterLoad: function (fb, item) {
		}
	});

});
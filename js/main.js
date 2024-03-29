AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// Wrap every letter in a span

	// var tryStuff = function () {

	// 	var textWrapper = document.querySelector('.bigtext');
	// 	//	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	// 	//var i = 0;
	// 	anime.timeline({ loop: true })
	// 		.add({
	// 			targets: '.bigtext .letter',
	// 			scale: [4, 1],
	// 			opacity: [0, 1],
	// 			translateZ: 0,
	// 			easing: "easeOutExpo",
	// 			duration: 950,
	// 			delay: (el, i) => 70 * i
	// 		}).add({
	// 			targets: '.bigtext',
	// 			opacity: 0,
	// 			duration: 1000,
	// 			easing: "easeOutExpo",
	// 			delay: 1000
	// 		});
	// };

	// // tryStuff();











	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();



	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};
	burgerMenu();


	var onePageClick = function () {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();


	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: false,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayTimeout: 8000,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.grid').colcade({
		columns: '.grid-col',
		items: '.grid-item'
	});

    /* photoswipe
     * ----------------------------------------------------- */
	var ssPhotoswipe = function () {
		var items = [],
			$pswp = $('.pswp')[0],
			$folioItems = $('.item-folio');

		// get items
		$folioItems.each(function (i) {

			var $folio = $(this),
				$thumbLink = $folio.find('.thumb-link'),
				$title = $folio.find('.item-folio__title'),
				$caption = $folio.find('.item-folio__caption'),
				$titleText = '<h4>' + $.trim($title.html()) + '</h4>',
				$captionText = $.trim($caption.html()),
				$href = $thumbLink.attr('href'),
				$size = $thumbLink.data('size').split('x'),
				$width = $size[0],
				$height = $size[1];

			var item = {
				src: $href,
				w: $width,
				h: $height
			}

			if ($caption.length > 0) {
				item.title = $.trim($titleText + $captionText);
			}

			items.push(item);
		});

		// bind click event
		$folioItems.each(function (i) {

			$(this).on('click', function (e) {
				e.preventDefault();
				var options = {
					index: i,
					showHideOpacity: true,

				}

				// initialize PhotoSwipe
				var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
				lightBox.init();
			});

		});

	};
	ssPhotoswipe();

	var validateForm = function () {
		var x = document.forms["form"]["name"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		}
	}
	validateForm();
	// var packeryLibrary = function () {

	// 	var $grid = $('.grid').packery({
	// 		itemSelector: '.grid-item',
	// 		percentPosition: true,

	// 	});
	// 	// make all grid-items draggable

	// 	$grid.on('click', '.grid-item', function (event) {
	// 		// change size of item by toggling large class
	// 		$(event.currentTarget).toggleClass('grid-item-large');
	// 		// trigger shiftLayout after item size changes
	// 		$grid.packery('shiftLayout');
	// 	});
	// 	$grid.find('.grid-item').each(function (i, gridItem) {
	// 		var draggie = new Draggabilly(gridItem);
	// 		// bind drag events to Packery
	// 		$grid.packery('bindDraggabillyEvents', draggie);
	// 	});
	// 	// https://imagesloaded.desandro.com/
	// 	// layout Packery after each image loads
	// 	// $grid.imagesLoaded().progress(function () {
	// 	// 	$grid.packery();
	// 	// });
	// };
	// packeryLibrary();
})(jQuery);


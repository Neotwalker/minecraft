$(function() {

	function mobileMenu() {
		if (!($('.header--bottom').hasClass("open"))) {
			$(".header--bottom").addClass("open");
			$("body").css("overflow", "hidden");
		} else {
			$(".header--bottom").removeClass("open");
			$("body").css("overflow", "");
		}
	}

	$(".burger").click(function () {
		mobileMenu();
		$(this).toggleClass('open');
	});

	$(".background-menu").on("click", function() {
		mobileMenu();
		$('.burger').removeClass('open');
	})

	if ($(window).width() <= 768) {
		$(".icon--mobile").click(function (e) {
			if (!($(".header--top .wrapper .search").find("form").hasClass("open"))) {
				$(".header--top .wrapper .search").find("form").css("display", "flex");
				$(".header--top .wrapper .search").find("form").css("align-items", "center");
				$(".header--top .wrapper .search").find("form").addClass("open");
			} else {
				$(".header--top .wrapper .search").find("form").removeClass("open");
			}
		});

	$(".icon--close").click(function(e){
			$("header").find("form").removeClass("open");
	});
	}

	$('.more').click(function() {
		$('.more--wrapper').fadeIn(400).addClass('open');
		$(this).hide();
	});

	$('.slider').owlCarousel({
		navContainer: $('.arrows'),
		dots: false,
		smartSpeed: 700,
		margin: 28,
		rewind: true,
		navText: [
			'<div class="arrows--prev"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7.5H1M1 7.5L7 1.5M1 7.5L7 13.5" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
			'<div class="arrows--next"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>'
		],
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	
	$('.slider--versions').owlCarousel({
		navContainer: $('.slider--arrows'),
		dots: false,
		smartSpeed: 500,
		checkVisible: true,
		margin: 10,
		rewind: true,
		navText: [
			'<div class="arrows--prev version--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 15L2.20711 8.70711C1.81658 8.31658 1.81658 7.68342 2.20711 7.29289L8.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
			'<div class="arrows--next version--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L7.79289 7.29289C8.18342 7.68342 8.18342 8.31658 7.79289 8.70711L1.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
		],
		responsive: {
			0: {
				autoWidth: false,
				items: 3,
				margin: 10,
			},
			350: {
				items: 4,
				autoWidth: false,
			},
			480: {
				autoWidth: false,
				items: 4,
				margin: 10,
			},
			600: {
				items: 7,
				autoWidth: false,
			},
			768: {
				items: 5,
				autoWidth: false,
			},
			820: {
				items: 6,
				autoWidth: false,
			},
			1000: {
				items: 10,
				autoWidth: true,
			}
		}
	});

	if ($(window).width() <= 1050){
		$('.slider--format').owlCarousel({
			navContainer: $('.format--arrows'),
			dots: false,
			smartSpeed: 700,
			autoWidth: true,
			rewind: true,
			margin: 10,
			navText: [
				'<div class="arrows--prev version--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 15L2.20711 8.70711C1.81658 8.31658 1.81658 7.68342 2.20711 7.29289L8.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
				'<div class="arrows--next version--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L7.79289 7.29289C8.18342 7.68342 8.18342 8.31658 7.79289 8.70711L1.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
			],
			responsive: {
				0: {
					autoWidth: false,
					items: 3,
					margin: 10,
				},
				350: {
					items: 4,
					autoWidth: false,
				},
				480: {
					autoWidth: false,
					items: 4,
					margin: 10,
				},
				600: {
					items: 7,
					autoWidth: false,
				},
				768: {
					items: 5,
					autoWidth: false,
				},
				820: {
					items: 6,
					autoWidth: false,
				},
				1000: {
					items: 10,
					autoWidth: true,
				}
			}
		})
	}

	// $('.slider').slick({
		// 	infinite: true,
		// 	slidesToShow: 3,
		// 	slidesToScroll: 3,
		// 	arrows: true,
		// 	appendArrows:'.slider--arrows',
		// 	prevArrow: '<div class="arrows--prev"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7.5H1M1 7.5L7 1.5M1 7.5L7 13.5" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
		// 	nextArrow: '<div class="arrows--next"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
		// 	responsive: [
		// 		{
		// 			breakpoint: 1024,
		// 			settings: {
		// 				slidesToShow: 2,
		// 				slidesToScroll: 2,
		// 				infinite: true,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 500,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				slidesToScroll: 1,
		// 				infinite: true,
		// 			}
		// 		},
		// 	]
	// });

	// $('.slider--versions').slick({
		// 	infinite: false,
		// 	slidesToShow: 10,
		// 	slidesToScroll: 2,
		// 	// variableWidth: true,
		// 	arrows: true,
		// 	appendArrows:'.slider--arrows',
		// 	prevArrow: '<div class="arrows--prev version--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 15L2.20711 8.70711C1.81658 8.31658 1.81658 7.68342 2.20711 7.29289L8.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		// 	nextArrow: '<div class="arrows--next version--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L7.79289 7.29289C8.18342 7.68342 8.18342 8.31658 7.79289 8.70711L1.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		// 	responsive: [
		// 		{
		// 			breakpoint: 1250,
		// 			settings: {
		// 				slidesToShow: 9,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 1150,
		// 			settings: {
		// 				slidesToShow: 8,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 1080,
		// 			settings: {
		// 				slidesToShow: 7,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 1024,
		// 			settings: {
		// 				slidesToShow: 6,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 900,
		// 			settings: {
		// 				slidesToShow: 5,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 800,
		// 			settings: {
		// 				slidesToShow: 5,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 700,
		// 			settings: {
		// 				slidesToShow: 6,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 600,
		// 			settings: {
		// 				slidesToShow: 5,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 500,
		// 			settings: {
		// 				slidesToShow: 4,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 370,
		// 			settings: {
		// 				slidesToShow: 3,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 	]
	// });

	if ($(window).width() <= 1000){
		// $('.slider--format').slick({
		// 	infinite: false,
		// 	slidesToShow: 8,
		// 	slidesToScroll: 1,
		// 	arrows: true,
		// 	appendArrows:'.format--arrows',
		// 	prevArrow: '<div class="arrows--prev format--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 15L2.20711 8.70711C1.81658 8.31658 1.81658 7.68342 2.20711 7.29289L8.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		// 	nextArrow: '<div class="arrows--next format--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L7.79289 7.29289C8.18342 7.68342 8.18342 8.31658 7.79289 8.70711L1.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		// 	responsive: [
		// 		{
		// 			breakpoint: 1024,
		// 			settings: {
		// 				slidesToShow: 6,
		// 				slidesToScroll: 1,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 540,
		// 			settings: {
		// 				slidesToShow: 5,
		// 				slidesToScroll: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 370,
		// 			settings: {
		// 				slidesToShow: 4,
		// 				slidesToScroll: 1,
		// 			}
		// 		},
		// 	]
		// });
	}

	$('.smiles .icon').click(function(){
		if (!($(this).parent().find(".smiles--list").hasClass("open"))) {
			$(this).parent().find(".smiles--list").fadeIn(300).addClass("open");
		} else {
			$(this).parent().find(".smiles--list").fadeOut(300).removeClass("open");
		}
	});

	$('#dle-comments-form .smile').click(function() {
		let smile = $(this).attr('alt');
		let text = $("#dle-comments-form #comments").val();
		$("#dle-comments-form #comments").focus().val(text + smile);
	});

	$('#dlemasscomments .smile').click(function() {
		let smile = $(this).attr('alt');
		let text = $("#dlemasscomments #comments").val();
		$("#dlemasscomments #comments").focus().val(text + smile);
	});

	if (document.querySelector('.goto-files') && document.querySelector('.download-area')) {
		function elementInViewport(el){
			let bounds = el.getBoundingClientRect();
			return (
					(bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
					(window.innerHeight - bounds.top > 0) && // Выше нижней
					(bounds.left + bounds.width > 0) && // Правее левой
					(window.innerWidth - bounds.left > 0)// Левее правой
			);
		}
		document.addEventListener("scroll", (e) => {
				let el = document.querySelector("#thisElement");
				let inViewport = elementInViewport(el);
				if (inViewport){
					$('.goto-files').removeClass('show');
				} else {
					$('.goto-files').addClass('show');
				}
				if( window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight){
					$('.goto-files').removeClass('show');
				}
		})
	
		$('.goto-files-button button').click(function () {
			$('html, body').animate({
				scrollTop: $(".download-area").offset().top - 100,
				scrollLeft: 0
			}, 1000)
		})
	}

	if (document.querySelector('ul.sort') && document.querySelector(".sort--news") ) {
		const opened_sort = document.querySelectorAll('ul.sort')[0];
		const sort = document.querySelector(".sort--news");
		sort.addEventListener("click", function (e) {
			opened_sort.classList.toggle("open");
			e.stopPropagation();
		});
		window.addEventListener('click', function(e) {
			if (opened_sort.classList.contains("open")){
				opened_sort.classList.remove('open');
			}
		});
	}

	if (document.querySelector('ul.sort') && document.getElementById("news-sort") ) {
		const opened_sort = document.querySelectorAll('ul.sort')[0];
		const sort = document.getElementById("news-sort");
		sort.addEventListener("click", function (e) {
			opened_sort.classList.toggle("open");
			e.stopPropagation();
		});
		window.addEventListener('click', function(e) {
			if (opened_sort.classList.contains("open")){
				opened_sort.classList.remove('open');
			}
		});
	}
});

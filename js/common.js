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

	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		appendArrows:'.slider--arrows',
		prevArrow: '<div class="arrows--prev"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7.5H1M1 7.5L7 1.5M1 7.5L7 13.5" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
		nextArrow: '<div class="arrows--next"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
		]
	});

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
					$('.goto-files').removeClass('show')
				} else {
					$('.goto-files').addClass('show');
				}
		})
	
		$('.goto-files-button button').click(function () {
			$('html, body').animate({
				scrollTop: $(".download-area").offset().top - 100,
				scrollLeft: 0
			}, 1000)
		})
	}

	if (document.querySelector('ul.sort') && document.getElementById("sort--news__mobile") ) {
		const opened_sort = document.querySelectorAll('ul.sort')[0];
		const sort = document.getElementById("sort--news__mobile");
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

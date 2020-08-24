$(document).ready(function () {
	slickSlider();
	copyToClipboard();
	toggleSandwich();
	smoothNavigate()

	$(window).resize(function () {
		var w = $(window).width();
		if (w > 1024) {
			$(".menu-list").removeAttr('style');
		}
	});
})

function slickSlider() {
	$('.pets-slider').slick({
		infinite: true,
		slidesToShow: 3,
		autoplay: false,
		responsive: [{
			breakpoint: 1251,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	})
}

function copyToClipboard() {
	const $temp = $("<input>");
	const $element = $(".bank-details__card")
	$element.click(function () {
		$("body").append($temp);
		$temp.val($element.text()).select();
		document.execCommand("copy");
		$temp.remove();
	});
}

function toggleSandwich() {
	const $sandwich = $(".sandwich")
	const $menu = $(".menu-list")
	$sandwich.click(function () {

		if ($sandwich.hasClass('sandwich_open')) {
			$menu.slideUp()
			$sandwich.removeClass('sandwich_open')
		} else {
			$menu.slideDown({
				start: function () {
					$(this).css({
						display: "flex"
					})
				}
			});
			$sandwich.addClass('sandwich_open')
		}
	});
}

function smoothNavigate() {
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();
		const src = $(this).attr("href"),
			position = $(src).offset().top;
		$('html, body').animate({ scrollTop: position }, 1000);
	});
}

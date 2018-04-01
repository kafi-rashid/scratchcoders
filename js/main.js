function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
jQuery(document).ready(function() {

	// NAVBAR
	$('.top-header .navbar-nav a').on('click', function () {
		$('.top-header .navbar-nav').find('li.active').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.top-header .navbar-nav li a').removeClass('active-link');
	});

	// JUMP TO SECTIONS
	$('#myNavbar li').not('.home-link').click(function(e) {
		var jump_to = $(this).find('a').attr('href');
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(jump_to).offset().top - $('.top-header').height() + 1
		}, 'slow');
	});

	// FITTEXT
	$(".banner-title").fitText(1.2, { minFontSize: '50px', maxFontSize: '90px' });
	$(".we-do-child .material-icons").fitText(1.2, { minFontSize: '50px', maxFontSize: '6vw' });

	// ISOTOPES
	var $grid = $('.grid').isotope({
	});
	$('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	$('.showcase-button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});

	// BACK TO TOP
	$('.back-to-top, .navbar-brand').click(function () {
		$('#myNavbar li').removeClass('active');
		$('#myNavbar .home-link').addClass('active');
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// SEARCH CONTAINER
	$('.message-container textarea').focus(function() {
		$('.message-container input[type="text"]').slideDown('fast');
	});
	// $('.message-container textarea').blur(function() {
	// 	$('.message-container input[type="text"]').slideUp('fast');
	// });
});

$(window).on('load', function() {
	(new WOW).init();
});
$(window).on('load resize', function() {
	$('.inner-right').each(function() {
		$(this).height($(this).parent().find('.inner-left').outerHeight());
	});
	$('.person-image').each(function() {
		$(this).outerHeight($(this).outerWidth());
	});
	$('.review-image-con').each(function() {
		$(this).outerHeight($(this).outerWidth());
	});
	$('#reviews').height($('#reviews').innerHeight());
});

$(document).scroll(function () {
	$(".navbar-fixed-top").toggleClass('top-header-scrolled', $(this).scrollTop() > $(".navbar-fixed-top").height());
	if ($(document).scrollTop() == 0) {
		$('.top-header .navbar-nav').find('li.active').removeClass('active');
		$('.top-header .navbar-nav li a').removeClass('active-link');
	}
	var scroll = $(window).scrollTop();
	$('.top-header .navbar-nav li a').each(function() {
		var that = $(this);
		var href = that.attr('href');
		if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
			$('.top-header .navbar-nav').find('li a').removeClass('active-link');
			$('.top-header .navbar-nav').find('li a[href^="#contact"]').addClass('active-link');
	    }
		else if ((scroll >= $(href).position().top - $(".navbar-fixed-top").height()) && (scroll <= ($(href).outerHeight() + $(href).position().top))) {
			$('#myNavbar li').removeClass('active');
			$('.top-header .navbar-nav').find('li a').removeClass('active-link');
			$('.top-header .navbar-nav').find('li a[href^="'+href+'"]').addClass('active-link');
		}
	});
});
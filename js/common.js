$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen' , 'effect-menu-slide' ],
		navbar: {
			title: '<img src="img/weblogo.jpg">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function(){
		$('.hamburger').addClass('is-active');
	}).bind('closed', function(){
		$('.hamburger').removeClass('is-active')
	})

	
	$('.about-slide').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
	});

	$(document).ready(function(){
		$("#my-menu").on("click","a", function (event) {

			event.preventDefault();

			var id  = $(this).attr('href'),

				top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

	$('.button1').click(function(){
			$('.shadow-services2').slideToggle("fast");	// 		$('#button2').click(function(){
	// 			$('.shadow-services2').slideToggle("fast", function(){
	// 	});
	// });
	});
		$('.fa-times').click(function(){
			$('.shadow-services2').slideToggle("fast");
	});
	$('.says').owlCarousel({
		loop: true,
		items: 1,
		nav:true,
		smartSpeed:700,
		// navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
	});
	$(window).scroll(function (){
		if ($(this).scrollTop() > $(this).height()) {
			$(".top").addClass('active');
		} else {
			$('.top').removeClass('active')
		}
	});
	$('.top').click(function() {
		$('html,body').stop().animate({scrollTop:0}, 'slow' , 'swing');
	});
});

$(window).on('load' , function() {
	$('.preloader').delay(1000).fadeOut("slow")
})

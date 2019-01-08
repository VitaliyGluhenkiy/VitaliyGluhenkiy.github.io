function openNav() {
	
	if ($(".hamburger").hasClass("is-active")) {
		$('.hamburger').removeClass('is-active');
		$("#my-menu").css("width", "0");
	}
	else {
		$("#my-menu").css("width","400px" );
		$('.hamburger').addClass('is-active');
	}
}
	
	
	
$(function() {


	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
	  
		  // Make sure this.hash has a value before overriding default behavior
		  if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
	  
			// Store hash
			var hash = this.hash;
	  
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 1000, function(){
		 
			  // Add hash (#) to URL when done scrolling (default click behavior)
			  window.location.hash = hash;
			});
		  } // End if
		});
	  });

	// $('#my-menu').mmenu({
	// 	extensions: [ 'widescreen' , 'effect-menu-slide' ],
	// 	navbar: {
	// 		title: '<img src="img/weblogo.jpg">'
	// 	},
	// 	offCanvas: {
	// 		position: 'right'
	// 	}
	// });

	// var api = $('#my-menu').data('mmenu');
	// api.bind('opened', function(){
	// 	$('.hamburger').addClass('is-active');
	// }).bind('closed', function(){
	// 	$('.hamburger').removeClass('is-active')
	// })
	

	
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

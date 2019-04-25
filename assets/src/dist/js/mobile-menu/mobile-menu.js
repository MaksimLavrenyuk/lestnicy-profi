$(document).ready(function() {
	$(function() {
		if ($(window).width() < 992){
			$('<div>', { class: 'mobile-menu__header'}).appendTo('.mobile-menu');

			$('.navbar .navbar-toggler').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .navbar-toggler').removeClass('d-none d-sm-block d-xl-none');

			$('.header__page-nav').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .header__page-nav').removeClass('header__page-nav float-right float-md-left');

			$('.enter-box').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .enter-box').removeClass('float-right');

			$('<div>', { class: 'mobile-menu__content'}).appendTo('.mobile-menu');
			$('<div>', { class: 'mobile-menu__nav'}).appendTo('.mobile-menu__content');

			$('.navbar-nav .nav-item').each(function(index) {
				var mobileAccordionNavItmContent = $(this).html();
				$('<div class="mobile-menu-nav-itm">' +
					mobileAccordionNavItmContent +
					'</div>').appendTo('.mobile-menu__nav');
			});

		};

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('.mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('.mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500);
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};
		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500);
		};
	});

});

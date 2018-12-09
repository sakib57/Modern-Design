/*=======================================================
                    SERVICES
=======================================================*/
$(function(){
    new WOW().init();
});

/*=======================================================
                    WORK
=======================================================*/
$(function() {
 	$('#work').magnificPopup({
  		delegate: 'a',
  		type:'image',
  		gallery:{
  			enabled:true
  		}
 	});
});
/*=======================================================
                   TEAM
=======================================================*/
$(function(){
  $("#team-members").owlCarousel({
  	items:3,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:3500,
  	smartSpeed:700,
  	responsive : {
	    // breakpoint from 0 up
	    0 : {
	    	items:1
	    },
	    // breakpoint from 480 up
	    480 : {
	    	items:2
	    },
	    // breakpoint from 768 up
	    768 : {
	    	items:3
	    }
	    
	    
	}
  });
});
/*=======================================================
                   TESTIMONIAL
=======================================================*/
$(function(){
  $("#customer-testimonials").owlCarousel({
  	items:1,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:3500,
  	smartSpeed:700,
  	autoplayHoverPause:true
  });
});
/*=======================================================
                   COUNTER
=======================================================*/
$('.counter').counterUp({
    delay: .5,
    time: 300
});

/*=======================================================
                   CLIENTS
=======================================================*/
$(function(){
  $(".client-list").owlCarousel({
  	items:5,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:3500,
  	smartSpeed:700,
  	responsive : {
	    // breakpoint from 0 up
	    0 : {
	    	items:1
	    },
	    // breakpoint from 480 up
	    480 : {
	    	items:3
	    },
	    // breakpoint from 768 up
	    768 : {
	    	items:5
	    }
	    
	    
	}
  });
});
/*=======================================================
                   NAV
=======================================================*/
$(function(){
	/*When page load*/
	if($(window).scrollTop() > 50 ){
		$("nav").addClass("bg-custom");
		$("#back-to-top").fadeIn();
		$("#back-to-top").addClass("d-none d-md-block");
	}

	/*When page Scroll*/
	$(window).scroll(function(){
		if($(this).scrollTop() < 50 ){
			$("nav").removeClass("bg-custom");
			$("#back-to-top").removeClass("d-md-block");
			$("#back-to-top").fadeOut();
			
		}else{
			$("nav").addClass("bg-custom");
			$("#back-to-top").addClass("d-none d-md-block");
			$("#back-to-top").fadeIn();
		}
	});
});
/*=======================================================
                   SMOOTH SCROLL
=======================================================*/
$(function(){
	$("a.smooth-scroll").click(function(event){
		//alert("sdfs");
		event.preventDefault();
		var section= $(this).attr("href");
		//document.write(section);
		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		},1250,"easeInOutExpo");
	});
});

/*=======================================================
                   TOGGLE IN MENU TOUCH
=======================================================*/
$(function(){
	$(".navbar-collapse ul li a").on("click touch",function(){
		$(".navbar-toggler").click();
	});
});


















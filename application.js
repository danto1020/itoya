var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 10,
	centeredSlides : true,
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints: {
	  767: {
		slidesPerView: 1,
		spaceBetween: 0
	  }
	}
  })

  let swipeOptionTop = {
	loop: true,
	effect: 'slide',
	speed: 2000,
	autoplay: {
	  delay: 30000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	}
  }
  var mySwiperTop = new Swiper('.swiper-container-top', swipeOptionTop);

  mySwiperTop.on('init', function () {
	console.log('initialized');
  });

$(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
		//150の数字のところでどこでフェードアウトさせるか調整
	    if ($(this).scrollTop() > 150) {
	      pagetop.fadeIn();
	    } else {
	      pagetop.fadeOut();
	    }
    });

	pagetop.click(function () {
		$('body,html').animate({
			scrollTop: 0
	//500の数字のところでスピード調整
		}, 500);
		return false;
	});
});

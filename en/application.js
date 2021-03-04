var mySwiper = new Swiper ('.swiper-products', {
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
	effect: 'fade',
	autoplay: {
	  delay: 4000,
	  disableOnInteraction: false,
	},
	speed: 4000,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	}
  }
  var mySwiperIndex = new Swiper('.swiper-index', swipeOptionTop);

// $(function () {
//     var pagetop = $('#page_top');
//     pagetop.hide();
//     $(window).scroll(function () {
// 		//150の数字のところでどこでフェードアウトさせるか調整
// 	    if ($(this).scrollTop() > 150) {
// 	      pagetop.fadeIn();
// 	    } else {
// 	      pagetop.fadeOut();
// 	    }
//     });

// 	pagetop.click(function () {
// 		$('body,html').animate({
// 			scrollTop: 0
// 	//500の数字のところでスピード調整
// 		}, 500);
// 		return false;
// 	});
// });

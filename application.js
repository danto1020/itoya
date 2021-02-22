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

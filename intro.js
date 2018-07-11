function blinker() {
	$('.animate').fadeOut(2000);
	$('.animate').fadeIn(2000);
}
setInterval(blinker, 4000);
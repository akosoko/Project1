function blinker() {
	$('.container').fadeOut(500);
	$('.container').fadeIn(500);
}
setInterval(blinker, 1000);
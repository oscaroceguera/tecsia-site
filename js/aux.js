$(function(){
	var $showMenu = $('#btn-menu');

	$showMenu.on('click', toggleMenu);

	function toggleMenu(){
		$('.nav__container').toggle()
	}
});
$(function(){
	var $esquemas = $('.cat__list--esq');

	var clickEsquema = function (){
		var esquema = $(this).attr('data-esquema');
		var $esquema = $('#'+esquema);
		
		$esquema.toggle();
	}

	$esquemas.on('click', clickEsquema);
});
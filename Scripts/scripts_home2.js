/* Document Ready */
$(document).ready(function () {	
	
	var $container = $('#container');
	
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector : '.item',
			columnWidth: 300,
		    gutterWidth: 25,
		    isFitWidth: true,
			isAnimated: true
		});
	});
	
});


/* Window Loaded */
$(window).load(function () {

	
	
});


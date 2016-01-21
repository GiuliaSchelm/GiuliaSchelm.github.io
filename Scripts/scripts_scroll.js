/* Document Ready */
$(document).ready(function () {	
	
	var $container = $('#container');
	$container.css('visibility','hidden')
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector : '.item',
			layoutMode : 'masonry',
			columnWidth: 300,
		    gutterWidth: 35, 
		    isFitWidth: true,
			isAnimated: true,
		});
		$container.css('visibility','visible')
	});
	
});

$(document).ready(function(){

$('#button').click(function(){
				$('html, body').animate({
					scrollTop: $("#description").offset().top
				}, 1600);
			});
   
    
    
$(".container img").click(function(){					      
					        $('html, body').animate({
                                scrollTop: $(this).parent().next().offset().top
                            }, 400)
 
					    });
    
});// JavaScript Document
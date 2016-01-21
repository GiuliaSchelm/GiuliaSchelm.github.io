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
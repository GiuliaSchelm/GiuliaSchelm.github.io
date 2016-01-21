// JavaScript Document
$(function(){
		   
	$('body').on('click','.infobutton',function(){
		$('.infotext').slideDown();	
	})
	
	$('body').on('click','.info-close',function(){
		$('.infotext').slideUp();
	})	   
		   
});


$(document).ready(function(){ 
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 100);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});


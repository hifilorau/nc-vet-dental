$(function() {
  	// $('.footer').hide();
		// $('.desktop-nav-container').hide();
  	$('.hero-content-main').hide();
	
	$('.pet-button').click(function(){
		$('.referral-overlay').hide("slide", { direction: "right" }, 2000);
		$('.hero-content-wrapper').hide();
		
		setTimeout(function(){
		$('.footer').show();
		$('.desktop-nav-container').fadeIn(2000);
		$('.hero-overlay').hide();
		$('.hero-content-intro').hide();
		$('.hero-content-main').fadeIn(2000);
  
}, 2000);
		
		
	});
	
	
});
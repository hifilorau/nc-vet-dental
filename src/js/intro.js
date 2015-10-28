$(function() {
	
	if ($('.site-wrap').hasClass('home-page')){
		siteState = null;
		localStorage.setItem("siteState", siteState);
		console.log(siteState);
			$('.hero-content-main').hide();
	}
	
		var siteState = localStorage.getItem("siteState");
	  console.log(siteState);
  	 $('.footer').hide();
		 $('.desktop-nav-container').hide();
    checkState();
	
	
	///// pet side intro
//	$('.pet-button').click(function(){
////		$('.referral-overlay').hide("slide", { direction: "right" }, 2000);
////		$('.client-overlay').hide("slide", { direction: "left" }, 2000);
////		$('.hero-content-wrapper').hide();		
//
//	});
	
	
	///// vet side 
	$('.vet-button').click(function(){
		siteState = "referrals";
		localStorage.setItem("siteState", siteState);
		delayThings();
		checkState();
		$('.referral-overlay').hide("slide", { direction: "right" }, 2000);
		$('.client-overlay').hide("slide", { direction: "left" }, 2000);
	});
	
	////pet side 
	
	$('.pet-button').click(function(){
		siteState = 'pet-owners';
	  localStorage.setItem('siteState', siteState);
		delayThings();
		checkState();
		$('.referral-overlay').hide("slide", { direction: "right" }, 2000);
		$('.client-overlay').hide("slide", { direction: "left" }, 2000);
		$('.hero-content-wrapper').hide();	
	});


	
  function checkState() {
		if (siteState === "referrals") {
			console.log(siteState);
			$('.referral').show();
			$('.footer').show();
			$('.desktop-nav-container').show();
		}
		
		if (siteState === "pet-owners") {
			$('.referral').hide();
			$('.footer').show();
			$('.desktop-nav-container').show();
		}	
		
		if (siteState === null) {
			$('.footer').hide();
		  $('.desktop-nav-container').hide();
		}
}
	
	function delayThings () {
				setTimeout(function(){
			$('.footer').show();
			$('.desktop-nav-container').fadeIn(2000);
			$('.hero-overlay').hide();
			$('.hero-content-intro').hide();
			$('.hero-content-main').fadeIn(2000);
    }, 2000);	
	
	}
	
	
});
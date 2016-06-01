$(function() {

	if ($('.site-wrap').hasClass('home-page')){
		siteState = null;
		localStorage.setItem("siteState", siteState);
		console.log(siteState);
		$('.hero-content-main').hide();
	}

		var siteState = localStorage.getItem("siteState");
//  	$('.footer').hide();
//		$('.desktop-nav-container').hide();
//	  $('.slides').hide();
	 $('.referral').hide();
    checkState();


//	$('.vet-portal').click(function(e){
//		e.preventDefault();
//		e.stopPropagation();
//		siteState = "referrals";
////		$('.slides').hide();
//		localStorage.setItem("siteState", siteState);
//
////		setTimeout(function(){
//		$('.site-wrap').load('templates/vet-portal.html');
////		$('.slides').css('display','none');
////		},100);
//	});

	////pet side

 //	$('.pet-button').click(function(){
//		siteState = 'pet-owners';
//		$('.slides').show();
//	  localStorage.setItem('siteState', siteState);
//		delayThings();
//		checkState();
//			$('.referral-overlay').fadeOut({duration: 1000});
//		setTimeout(function(){}, 1000)
//		$('.client-overlay').fadeOut({ duration: 1000});
//		$('.hero-content-wrapper').hide();
//		$('.slides').show();
//		console.log('show');
//	});



  function checkState() {
		if (siteState === "referrals") {
			console.log(siteState);
			$('.referral').show();
			$('.desktop-nav-container').show();
//			delayThings();

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
    }, 500);

	}


});

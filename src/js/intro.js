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
	  $('.slides').hide(); 
	
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
//		setTimeout(function(){
		$('.hero-content-main').html(
			'<div class="referral-container"><h1 class="vet-referral-h1">Veterinary Referral Portal</h1><div class="vet-content"><div class="refer-row"><div class="table-head">Make Online Referral:</div><div class="table-content"><a href="referral.html">Referral Form</a></div></div><div class="refer-row"><div class="table-head">View Patient Records:</div><div class="table-content"><a target="_blank" href="https://www.dropbox.com">Record Portal</a></div></div><div class="refer-row"><div class="table-head">Pre-Anesthesia Screening:</div><p class="table-content">For all patients a recent veterinary examination, full chemistry panel, complete blood count and urinalysis are needed. For cats older then 8 years of age, a thyroid level is also needed. In addition, patients at risk for hypertension should have blood pressure measurements obtained. If patients have had a history of unexplained weight loss, then chest radiographs and abdominal ultrasound may be recommended prior to anesthesia.</p></div></div></div>'
			);
//		},100);
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
			$('.slides').show(); 
    }, 500);	
	
	}
	
	
});
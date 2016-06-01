app.referralForm = function () {
//Parse.initialize('DUakhwUMYR0lBKbcQWbnP1zH4wgVVJTVXe8FVrih', '08GwtDSqtyA2xH1Ru4Fz17LKxu7pVqxRBLkZUYzj');
//
//var ReferralForm = Parse.Object.extend("ReferralForm");
//referralForm = new ReferralForm();
		var vetDentalReferral = new Firebase("https://vet-dental-referral.firebaseio.com/");


//			var data = {
//			petName: $('#pet-name').val(),
//			breed: $('#breed').val(),
//			sex: $('input[type="radio"][name="sex"]:checked').val(),
//			spayOrNeutered: $('input[type="radio"][name="spayed-neutered"]:checked').val(),
//			age: $('#age').val(),
//			color: $('#color').val(),
//			ownerName: $('#owner-name').val(),
//			ownerNumber: $('#owner-number').val(),
//			vetName: $('#vet-name').val(),
//			vetEmail: $('#vet-email').val(),
//			clinicName: $('#clinic-name').val(),
//			faxNumber: $('#fax-number').val(),
//			clinicPhoneNumber: $('#clinic-phone-number').val(),
//			reason: $('#reason').val(),
//			medHistory: $('#med-history'),
//			medications: $('#medications'),
//			allergies: $('#allergies'),
//			prevDental: $('#prev-dental')
//		};


	$('.referral-submit').submit(function(e) {
		console.log('maybe');
	var newReferral = new Firebase("https://vet-dental-referral.firebaseio.com/referral");

//		var newReferral = referralForm.child('form');
		//form data

		newReferral.set({
			petName: $('#pet-name').val(),
			breed: $('#breed').val(),
			sex: $('input[type="radio"][name="sex"]:checked').val(),
			spayOrNeutered: $('input[type="radio"][name="spayed-neutered"]:checked').val(),
			age: $('#age').val(),
			color: $('#color').val(),
			ownerName: $('#owner-name').val(),
			ownerNumber: $('#owner-number').val(),
			vetName: $('#vet-name').val(),
			vetEmail: $('#vet-email').val(),
			clinicName: $('#clinic-name').val(),
			faxNumber: $('#fax-number').val(),
			clinicPhoneNumber: $('#clinic-phone-number').val(),
			reason: $('#reason').val(),
			medHistory: $('#med-history').val(),
			medications: $('#medications').val(),
			allergies: $('#allergies').val(),
			prevDental: $('#prev-dental').val()
		});

		e.preventDefault();
		e.stopPropagation();
		window.location = "confirmation.html";
	});

};

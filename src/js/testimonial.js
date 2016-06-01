
$(document).ready(function() {

	var divs = $('.quote[id^="content-"]').hide(),
    i = 0;
 
(function cycle() {

    divs.eq(i).fadeIn(1400)
              .delay(5000)
              .fadeOut(1400, cycle);

    i = ++i % divs.length;

})();

});

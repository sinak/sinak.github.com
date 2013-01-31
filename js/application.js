// Makes share buttons appear after first scroll

var current = "more";
if ($(window).width() <= 480 || $(window).height() <= 321){ var current = "less"; }

jQuery(document).ready(function($) {
  var $shareWidgets = $( '#share-widget' );

	if (current == "less") {
		$('#share_sidebar').insertAfter($('.postcontent'));
	}
	else {
	  $shareWidgets.css('display','none');
	}
});

var scrolled = false;

if ($(window).width() >= 480) {
	$(window).scroll(function () {
	  var $shareWidgets = $( '#share-widget' );
	    if (scrolled == false) {$shareWidgets.fadeIn("slow");}
	    scrolled = true;
	});
}


$(window).resize(function() {
	if ($(window).width() <= 480 || $(window).height() <= 321) {
		if (current != "less"){$('#share_sidebar').insertAfter($('.postcontent'));}
		current = "less";
	}
	else if ($(window).width() >= 479 || $(window).height() >= 320) {
	    if (current != "more"){$('#share_sidebar').insertAfter($('header'));}
	    current = "more";
	}
	else {}
});
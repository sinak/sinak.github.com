// Makes share buttons appear after first scroll

var current = "more";
var current = "more";
if ($(window).width() < 480 ){ var current = "less"; }
if ($(window).height() < 321 ){var currenth = "less";}

jQuery(document).ready(function($) {
  var $shareWidgets = $( '#share-widget' );

	if ($(window).width() < 480 || $(window).height() < 321 ) {
		$('#share_sidebar').insertAfter($('.postcontent'));
	}
	else {
	  $shareWidgets.css('display','none');
	}
});

var scrolled = false;

if ($(window).width() > 480) {
	$(window).scroll(function () {
	  var $shareWidgets = $( '#share-widget' );
	    if (scrolled == false) {$shareWidgets.fadeIn("slow");}
	    scrolled = true;
	});
}


$(window).resize(function() {
	if ($(window).width() < 480 ) {
		if (current != "less"){$('#share_sidebar').insertAfter($('.postcontent'));}
		current = "less";
	}
	else if ($(window).width() > 480  && current != "more") {
	    if (current != "more"){$('#share_sidebar').insertAfter($('header'));}
	    current = "more";
	}
	else {}
});


$(window).resize(function() {
	if ($(window).height() < 321 ) {
		if (currenth != "less"){$('#share_sidebar').insertAfter($('.postcontent'));}
		currenth = "less";
	}
	else if ($(window).height() > 321  && currenth != "more") {
	    if (currenth != "more"){$('#share_sidebar').insertAfter($('header'));}
	    currenth = "more";
	}
	else {}
});
// Makes share buttons appear after first scroll

var current = "more";
if ($(window).width() < 321 || $(window).height() < 321){ var current = "less"; alert('current < 321');}

jQuery(document).ready(function($) {
  var $shareWidgets = $( '#share-widget' );

	if (current = "less") {
		$('#share_sidebar').insertAfter($('.postcontent'));
		alert('moved down a');
	}
	else {
	  $shareWidgets.css('display','none');
	}
});

var scrolled = false;

if ($(window).width() > 321) {
	$(window).scroll(function () {
	  var $shareWidgets = $( '#share-widget' );
	    if (scrolled == false) {$shareWidgets.fadeIn("slow");}
	    scrolled = true;
	});
}


$(window).resize(function() {
	if ($(window).width() < 321 || $(window).height() < 321) {
		if (current != "less"){$('#share_sidebar').insertAfter($('.postcontent'));alert('move down b');}
		current = "less";
	}
	else if ($(window).width() > 320 || $(window).height() > 320) {
	    if (current != "more"){$('#share_sidebar').insertAfter($('header'));alert('move up b');}
	    current = "more";
	}
	else {}
});
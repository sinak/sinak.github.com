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

if ($(window).width() >= 480) {
	window.setTimeout(function(){
			$( '#share-widget' ).fadeIn("slow");
		}, 2000);
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
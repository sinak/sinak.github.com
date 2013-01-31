// Makes share buttons appear after first scroll

var current = "more";
var currenth = "more";
if ($(window).width() < 321 ){ var current = "less"; alert('current < 321');}
if ($(window).height() < 321 ){var currenth = "less";alert('height < 321');}

jQuery(document).ready(function($) {
  var $shareWidgets = $( '#share-widget' );

	if ($(window).width() < 321 || $(window).height() < 321 ) {
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
	if ($(window).width() < 321 ) {
		if (current != "less"){$('#share_sidebar').insertAfter($('.postcontent'));alert('move down b');}
		current = "less";
	}
	else if ($(window).width() > 321  && current != "more") {
	    if (current != "more"){$('#share_sidebar').insertAfter($('header'));alert('move up b');}
	    current = "more";
	}
	else {}
});


$(window).resize(function() {
	if ($(window).height() < 321 ) {
		if (currenth != "less"){$('#share_sidebar').insertAfter($('.postcontent'));alert('move down c');}
		currenth = "less";
	}
	else if ($(window).height() > 321  && currenth != "more") {
	    if (currenth != "more"){$('#share_sidebar').insertAfter($('header'));alert('move down d');}
	    currenth = "more";
	}
	else {}
});
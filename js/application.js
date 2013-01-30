// Your JavaScript

$(window).scroll(function(){
  $("#share_sidebar").stop().css({"paddingTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});

$(document).ready(function() { 
	$(document.body).fadeIn(2000);
	resizeDiv($("#home"));
	resizeDiv($("#about"));
	resizeDiv($("#projects"));
	resizeDiv($("#contact"));
	$("#banner a").bind("click",function(event){ 
		event.preventDefault(); 
		var target = $(this).attr("href"); 
		$("html, body").stop().animate({ 
			scrollLeft: $(target).offset().left, 
			scrollTop: $(target).offset().top 
		}, 1200); 
			$("body").css("background-color", "green");
	}); 
}); 

window.onresize = function(event) {
	resizeDiv($("#home"));
	resizeDiv($("#about"));
	resizeDiv($("#projects"));
	resizeDiv($("#contact"));}

function resizeDiv(div) {
	vpw = $(window).width();
	vph = $(window).height();
	$(div).css({
		"height": vph + "px",
		"width": vpw + "px"
	});
}


(function(window){
	var target;

	$(document).ready(function() { 
		$(document.body).fadeIn(2000);
		resizeDiv($("#home"));
		resizeDiv($("#about"));
		resizeDiv($("#projects"));
		resizeDiv($("#contact"));
		$("#banner a").bind("click",function(event){ 
			event.preventDefault(); 
			target = $(this).attr("href"); 
			slide(setSlideTime);
			$("body").css("background-color", "green");
		}); 
	}); 

	this.onresize = function(event) {
		resizeDiv($("#home"));
		resizeDiv($("#about"));
		resizeDiv($("#projects"));
		resizeDiv($("#contact"));
		slide(0);	}

	function resizeDiv(div) {
		vpw = $(this).width();
		vph = $(this).height();
		$(div).css({
			"height": vph + "px",
			"width": vpw + "px"
		});
	}

	function slide(time) {
		$("html, body").stop().animate({ 
				scrollLeft: $(target).offset().left, 
				scrollTop: $(target).offset().top 
		}, time);
	}

	function setSlideTime() {
		var time;
		if($(this).width() > 768) {
			time = 1200;
		} else {
			time = 800;
		}
		console.log(time);
		return time;
	}
})(this);
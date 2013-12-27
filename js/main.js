(function(window){
	var target;

	$(document).ready(function() { 
		$("#hi").fadeIn(10000);
		slideChoice();
		resizeDiv($("#home"));
		$(".panel").each(function(){
			$(this).css("display", "block");
		})
		resizeDiv($("#about"));
		resizeDiv($("#projects"));
		resizeDiv($("#contact"));
		$("#banner a").bind("click",function(event){ 
			event.preventDefault(); 
			target = $(this).attr("href"); 
			slide(setSlideTime);
			$("body").css("background-color", "red");
		}); 
	}); 

	this.onresize = function(event) {
		var width = $(this).width();
		$(".wide").css("width", width * 4 + "px");
		console.log(width * 4);
		resizeDiv($("#home"));
		resizeDiv($("#about"));
		resizeDiv($("#projects"));
		resizeDiv($("#contact"));
		slide(0);	
	}

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

	function slideChoice() {
		$("#vertical").click(function() {
			$("li[data-choice='h'").attr({
				"id":"unchosen"
			});
			$("li[data-choice='v']").attr({
				"id":"chosen"
			});
			$(".panel").css("float","none");
		});
		$("#horizontal").click(function (){
			$("li[data-choice='v'").attr({
				"id":"unchosen"
			});
			$("li[data-choice='h']").attr({
				"id":"chosen"
			});
			$(".panel").css("float", "left");
		})
	}
})(this);
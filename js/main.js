(function(window){
	var target;

	$(document).ready(function() {
		$("html, body").animate({ 
				scrollLeft: 0, 
				scrollTop: 0
		}, 0.1);
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
			$(this).addClass("current", 1000, "swing");
			$("#banner li a").not($(this)).removeClass("current");
			var color = $(target).css('background-color')
			$("body").css("background-color", color);
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
		$("#vertical, li[data-choice='v']").click(function() {
			$("li[data-choice='h']").attr({
				"id":"unchosen"
			});
			$("li[data-choice='v']").attr({
				"id":"chosen"
			});
			$(".panel").css("float","none");
			slide(0);
		});
		$("#horizontal, li[data-choice='h']").click(function (){
			$("li[data-choice='v']").attr({
				"id":"unchosen"
			});
			$("li[data-choice='h']").attr({
				"id":"chosen"
			});
			$(".panel").css("float", "left");
			slide(0);
		})
	}
})(this);
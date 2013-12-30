(function(window){
	var currW = $(this).width();
	var currH = $(this).height();
	var target;
	var descFont = parseInt($(".desc").css("font-size"));
	var exclamations = ["Beautiful", "Cool", "Great", "Awesome", "Perfect", "Sweet", "Hurrah", "Woo"];
	var previousDescBottom = $(".desc").offset().top + $(".desc").height() + parseInt($(".desc").css("margin"));
	var previousContactTop;
	$(document).ready(function() {
		$(".wide").css("width", $(this).width + "px");
		$(".panel").css("height", $(this).height + "px");
		console.log($(".wide").css("width"));
		$(".panel").css("width", $(this).width / 4 + "px");
		console.log($(".panel").css("width"));
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
		changeFont();
	}); 

	this.onresize = function(event) {
		if($(window).height() > currH) {
			descFont = descFont + 0.5;
		} 
		currH = $(window).height();
		console.log("new H is " + $(window).height());
		var width = $(this).width();
		// $(".wide").css("width", width * 4 + "px");
		console.log(width * 4);
		resizeDiv($("#home"));
		resizeDiv($("#about"));
		resizeDiv($("#projects"));
		resizeDiv($("#contact"));
		slide(0);	
		changeFont();
	}

	function changeFont() {
		var descBottom = $(".desc").offset().top + 
					 $(".desc").height() + 
					 parseInt($(".desc").css("margin"));
		console.log("desc bottom is " + descBottom);
		var contact = $("#banner").offset().top;
		console.log("banner top is " + contact);
		console.log("font is " + descFont);
		if(descBottom > contact && descFont > 14) {
			descFont = descFont - 1;
			if(descBottom > contact && descFont > 14) {
				descFont = descFont - .5;
			}
		} 
		$(".desc").css("font-size", descFont + "px");
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
		if($(target).offset() !== undefined) {
			$("html, body").stop().animate({ 
				scrollLeft: $(target).offset().left, 
				scrollTop: $(target).offset().top 
			}, time);	
		}
		
	}

	function setSlideTime() {
		var time;
		if($(this).width() > 768) {
			time = 1200;
		} else {
			time = 600;
		}
		console.log(time);
		return time;
	}

	function slideChoice() {
		var rand;
		$("#vertical, li[data-choice='v']").click(function() {
			rand = Math.floor(Math.random()*exclamations.length);
			$("li[data-choice='h']").attr({
				"id":"unchosen"
			});
			$("li[data-choice='v']").attr({
				"id":"chosen"
			});
			$(".panel").css("float","none");
			$("#direction-question").slideUp(function() {
				$(this).html(exclamations[rand] + ". Let's go down!").slideDown();
			});
			slide(0);
		});
		$("#horizontal, li[data-choice='h']").click(function (){
			rand = Math.floor(Math.random()*exclamations.length);
			$("li[data-choice='v']").attr({
				"id":"unchosen"
			});
			$("li[data-choice='h']").attr({
				"id":"chosen"
			});
			$(".panel").css("float", "left");
			$("#direction-question").slideUp(function() {
				$(this).html(exclamations[rand] + ". Let's go right!").slideDown();
			});
			slide(0);
		})
	}
})(this);
(function(window){
	var target;
	var descFont = parseInt($(".desc").css("font-size"));
	var exclamations = ["Beautiful", "Cool", "Great", "Awesome", "Perfect", "Sweet", "Hurrah", "Woo"];
	var previousDescBottom = $(".desc").offset().top + $(".desc").height() + parseInt($(".desc").css("margin"));
	var previousContactTop;
	$(document).ready(function() {
		var left;
		$(window).animate({
		    'pageXOffset': 0,
		    'pageYOffset': 0
		}, {
		    duration: 0.1,
		    easing: 'swing',
		    step: function(now, fx) {
		        if (fx.prop == 'pageXOffset') {
		            left = now;
		        } else if (fx.prop == 'pageYOffset') {
		            window.scrollTo(left, now);
		        }
		    }
		});
		slideChoice();
		resizeDiv();
		$("#banner a").bind("click",function(event){ 
			event.preventDefault(); 
			target = $(this).attr("href"); 
			slide(setSlideTime);
			$("#banner li a").not($(this)).removeClass("current");
			$(this).addClass("current");
			var color = $(target).css('background-color')
			$("body").css("background-color", color);
		}); 
		changeFont();
	}); 

	this.onresize = function(event) {
		event.preventDefault();
		resizeDiv();
		slide(0);
		if($(window).width() < 600) {
			changeFont(); 
		}	
	}

	function changeFont() {
		var descBottom = $(".desc").offset().top + 
					 $(".desc").height() + 
					 parseInt($(".desc").css("margin"));
		var contact = $("#banner").offset().top;
		if(descBottom > contact && descFont > 14) {
			descFont = descFont - 1.3;
		    $(".desc").css("font-size", descFont + "px");
		} else if(contact > descBottom + 25) {
			descFont = descFont + 0.1;
			$(".desc").css("font-size", descFont + "px");
		}
	}
	function resizeDiv() {
		var vpw = $(this).width();
		var vph = $(this).height();
		$(".panel").css({
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
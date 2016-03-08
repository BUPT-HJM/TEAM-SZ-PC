$(function(){
	$(".welcome-circle").click(function(){
		$("#bg-1").css("opacity",0);
		$(".logo").addClass(" logo-left-small");
		$(".logo-font").addClass(" logo-font-change");
		$(".welcome-circle").addClass(" welcome-circle-change");
		$(".share-join").addClass(" share-join-show");
		$(".welcome-circle").hover(//消除hover的样式
			function(){},
			function(){
				$(".welcome-circle").find("img").addClass("welcome-circle-img-change");
				$(".small-circle").addClass("small-circle-change");
			});
		setTimeout(nav_change,1500);
	});
	function nav_change(){
		$(".nav-line").addClass(" nav-line-change");
	};
});
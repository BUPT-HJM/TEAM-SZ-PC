$(function(){
	$(".welcome-circle").click(function(e){
		$("#bg-1").css("opacity",0);
		$(".logo").addClass("logo-left-small");
		$(".logo-font").addClass("logo-font-change");
		$(".welcome-circle").addClass("welcome-circle-change");
		$(".share-join").addClass("share-join-show");
		$(".welcome-circle").hover(//消除hover的样式
			function(){},
			function(){
				$(".welcome-circle").find("img").addClass("welcome-circle-img-change");
				$(".small-circle").addClass("small-circle-change");
			});
		setTimeout(nav_change,1000);
		setTimeout(introduction_show,1500);
		$(".welcome-circle").unbind("click").bind("click",function(e){
				if($(".nav-line").hasClass("nav-line-change")){
					$(".nav-line").removeClass("nav-line-change");
				}
				else{
					$(".nav-line").addClass("nav-line-change");
				}
			});
		return false;
	});
	function nav_change(){
		$(".nav-line").addClass("nav-line-change");
	};
	function introduction_show(){
		$(".introduction").addClass("introduction-show");
	};
	$(".nav-item").click(function(){
		$(".logo-font").addClass(" logo-font-navitem");
		$(".logo").addClass(" logo-contact");
		$(".introduction").addClass(" introduction-hide");
	});
});

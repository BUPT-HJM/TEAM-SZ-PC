$(function(){
    /*
    欢迎页按钮点击效果
     */
    $(".welcome-circle").click(function(e){
        $("#bg-1").css("opacity",0);
        $(".logo").addClass("logo-left-small");
        $(".logo-font").addClass("logo-font-change");
        $(".welcome-circle").addClass("welcome-circle-change");
        $(".share-join").addClass("share-join-show");
        $(".snow").addClass(" snow-hide");//雪花消失
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

    /*
    菜单导航点击效果
     */
    $(".nav-timeline").click(function(){
        $(".logo-font").addClass("logo-font-change-second");
        $(".logo").addClass(" logo-top-left");
        $(".introduction").addClass(" introduction-hide");
        $(this).find("img").addClass("nav-under-line-show")
        $(this).siblings().find(".nav-hover").removeClass("nav-under-line-show");
        $(".timeline").addClass("timeline-change");
        $(".contact").removeClass("contact-change");
        $(".contact-right").removeClass("contact-right-change");
    });
    $(".nav-contact").click(function(){
        $(".logo-font").addClass("logo-font-change-second");
        $(".logo").addClass(" logo-top-left");
        $(".introduction").addClass(" introduction-hide");
        $(this).find("img").addClass("nav-under-line-show")
        $(this).siblings().find(".nav-hover").removeClass("nav-under-line-show");
        $(".timeline").removeClass("timeline-change");
        $(".contact").addClass("contact-change");
        $(".contact-right").addClass("contact-right-change");
    });
    $(".nav-index").click(function(){
        $(".logo-font").removeClass("logo-font-change-second");
        $(".logo").removeClass(" logo-top-left");
        $(".introduction").removeClass(" introduction-hide");
        $(this).find("img").addClass("nav-under-line-show")
        $(this).siblings().find(".nav-hover").removeClass("nav-under-line-show");
        $(".timeline").removeClass("timeline-change");
        $(".contact").removeClass("contact-change");
        $(".contact-right").removeClass("contact-right-change");
    });
    /*
    logo点击效果
     */
    $("#container").on("click",".logo-top-left",function(){
        $(".logo-font").removeClass("logo-font-change-second");
        $(".logo").removeClass(" logo-top-left");
        $(".introduction").removeClass(" introduction-hide");
        $(".nav-index").find("img").addClass("nav-under-line-show")
        $(".nav-index").siblings().find(".nav-hover").removeClass("nav-under-line-show");
        $(".timeline").removeClass("timeline-change");
        $(".contact").removeClass("contact-change");
        $(".contact-right").removeClass("contact-right-change");
    });
    /*
    timeline-item的hover效果
     */
     $(".timeline-item").hover(function(){
        $(this).find(".timeline-item-p").css("opacity",0);
        $(this).find(".timeline-item-p-detail").css("opacity",1);
     },function(){
        $(this).find(".timeline-item-p").css("opacity",1);
        $(this).find(".timeline-item-p-detail").css("opacity",0);
     });
     /*
     contact-circle点击效果
      */
     $(".contact-circle").click(function(){
        if($(this).hasClass("contact-circle-change")) {
            $(this).removeClass("contact-circle-change");
            $(this).parent().find(".contact-email").removeClass("contact-email-change");
        }
        else {
            $(this).addClass("contact-circle-change");
            $(this).parent().find(".contact-email").addClass("contact-email-change");
        }
     });
});
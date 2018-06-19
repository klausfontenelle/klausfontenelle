$().ready(function(){
	$(".column img").mouseenter(function(){
         $(this).css("opacity", "0.6")
    })
    $(".column img").mouseleave(function(){
        $(this).css("opacity", "1")
    });
});
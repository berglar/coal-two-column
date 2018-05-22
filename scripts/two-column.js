console.log('hi there');
var curr_text;
$(document).ready(function() {
    /*$(".poem").css("visibility", "hidden");*/
    
    //$($(".display")[0]).css("visibility", "visible");
    curr_text = $(".display")[0];
    $(curr_text).css("visibility", "visible");
    
});

$( window ).scroll(function() {
    console.log('were scrolling');
    var leftColTop = $('#flex_item'); //Todo get this number
    var scrollTop = $(window).scrollTop(),
        divOffset = $('#two-rooms').offset().top,
        dist = (divOffset - scrollTop);
    console.log("dist", dist);
    
    console.log('leftColTop', leftColTop);
    if (dist == leftColTop){
        console.log('hitthetthresh');
       
        $('#poem_1').css("visibility", "visible");
    }
    

    $('.message').text(dist);
    var div = $(".display")[0];
    var element = $("#two-rooms");
    var scrollPosition = element.scrollHeight - element.clientHeight;
    console.log(scrollPosition);
    var scroll = ($(div).offset());
    console.log("height", $("#two-rooms").height()); 
    console.log($("two-rooms").height());
    console.log($("#right").scrollHeight);
    console.log(scroll);
    
});
    
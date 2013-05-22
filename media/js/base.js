$(document).ready(function($){
    $("a#gotop").click(function(){$("html,body").animate({scrollTop:"0px"},600);return false});
    //新窗口打开
    $("#content .post .con a:not(a[rel=nofollow], a[href^=javascript], a[class=more]), #comments .comment-list a[rel*=nofollow]").attr({
        target:"_blank"
    });
    //loading...
    $('a:not(a[href^="javascript"], a[href^="https"], a[target="_blank"], a[href*="#"])').click(function(e){
        if(e.which == 2){
                return true;
            }else{
                $('#clickload').slideDown(200);
            }
    });
});
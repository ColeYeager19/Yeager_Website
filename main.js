// JavaScript Document

$(document).ready(function(){
    $("body").on({
         setTimeout(function(){
            $(this).css("background-image", "1");
			}, 5000);
        mouseleave: function(){
            $(this).css("background-image2", "2");
        },
       
        dblclick: function(){
            $(this).css("background-image", "3");
        }
    });
});


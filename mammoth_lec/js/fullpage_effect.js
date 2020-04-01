$(document).ready(function(){

  $('#fullpage').fullpage({

    verticalCentered: false,
    navigation:true,
    navigationPosition:'right',
    anchors:['1st', '2st', '3st', '4st'],
    afterLoad:function(anchorLink, index){
      if(anchorLink == '2st'){
        $(".main_txt_2").addClass("txt");
        $(".page_logo_2").addClass("text_up");
      }
      if(anchorLink == '3st'){
        $(".main_txt_3").addClass("txt");
        $(".page_logo_3").addClass("text_up");
      }
      if(anchorLink == '4st'){
        $(".page_title").addClass("slide_up_1");
        $(".page_sub_title").addClass("slide_up_2");
        $(".slides").addClass("slide_up_3");
      }
    }

  });

});

















//---

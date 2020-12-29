$(document).ready(function(){


  $("#submit").click(function(){
    $(".message").show();
    $("form").hide();
  });


  $("input").focus(function(){
      $(this).css({
          backgroundColor: 'yellow',
          outline: 'none'
      });
  });


  $("input").blur(function(){
      $(this).css({
          backgroundColor: 'lightgreen'
      });
  });

  $(".btn-toggle").click(function(){
    $(".fadein, .fadeout, .box").toggle();
  });


  $(".fadein").click(function(){
    $(".box-1").fadeIn();
    $(".box-2").fadeIn("slow");
    $(".box-3").fadeIn(2000);
  });


  $(".fadeout").click(function(){
    $(".box-1").fadeOut();
    $(".box-2").fadeOut("slow");
    $(".box-3").fadeOut(2000);
  });


  $(".signup-form").hide(function(){
    
  });

  $(".form-button").click(function(){
    $("form, .signup-form").show(2000);
  });

  
  $(".form-button").click(function(){
    $(".form-button").hide();
  });


  $(".btn-toggle").click(function(){
    $(".fade, .boxes").show();
  });


});
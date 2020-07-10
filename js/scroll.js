$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('.b2').click(function() {
    $("html,body").animate({scrollTop:$('#contact').offset().top});
  });

  
});

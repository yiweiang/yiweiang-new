$(function(){
  $('.container').hide();
  $('.container').fadeIn(1000);
  
  var main = main = $('.nav');
  
  $('.scroll').click(function(event){
    event.preventDefault();
    
    var full_url = this.href,
      parts = full_url.split('#'),
      trgt = parts[1],
      target_offset = $('#'+trgt).offset(),
      target_top = target_offset.top;
      
    $('html,body').animate({scrollTop:target_top}, 500);
    
    main.children().removeClass();
    $(this).parent().addClass('active');
  })
})
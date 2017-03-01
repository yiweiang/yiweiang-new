$(function () {

  var main = main = $('.nav');

  $('.scroll').click(function (event) {
    event.preventDefault();

    var full_url = this.href,
      parts = full_url.split('#'),
      trgt = parts[1],
      target_offset = $('#' + trgt).offset(),
      target_top = target_offset.top;

    $('html,body').animate({ scrollTop: target_top }, 500);

    //main.children().removeClass();
    //$(this).parent().addClass('active');
  })

  $(document).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $('.whereiveworked').parent().addClass('active');
      $('.aboutme').parent().removeClass();
    }
    if ($(document).scrollTop() < 300) {
      $('.aboutme').parent().addClass('active');
      $('.whereiveworked').parent().removeClass();
    }
  })
    (function (h, o, t, j, a, r) {
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings = { hjid: 432179, hjsv: 5 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');
})

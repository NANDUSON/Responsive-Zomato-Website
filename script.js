$(document).ready(function(){
    $("input[name='downloadApp']").click(function(){
      if ($(this).attr('id') == 'email') {
        $('.input__container input').attr('placeholder', 'Email');
      } else {
        $('.input__container input').attr('placeholder', 'Phone');
      }
    });
  });
  
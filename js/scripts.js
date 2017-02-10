$(document).ready(function() {

  var animation = new Image();
  $(animation).attr('src', 'img/spank-animated.gif');

  $("#gamegif").click(function() {
    $("#gamegif").attr('src', 'img/spank-animated.gif');
    $('#spankcounter').html(function(i, val) { return val*1+1 });
  });
});
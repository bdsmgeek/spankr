$(document).ready(function() {
  var animation = new Image();
  $(animation).attr('src', 'img/spank-animated.gif');
  $("#gamegif").click(function() {
    $("#gamegif").attr('src', animation);
  });
});	
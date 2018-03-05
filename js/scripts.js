$(document).ready(function() {

  var animations = ['img/01.gif','img/02.gif'];
  var thumbs = ['img/01.thumb.gif','img/02.thumb.gif'];
  var spanks = 0;
  var currentCharacter = 1;
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'audio/spank.mp3');

  $("#next").on( "click", function() {
    next();
  });
  $("#mute").on( "click", function() {
    mute();
  });

  function next() {
    currentCharacter++;
    if (currentCharacter == animations.length){
      currentCharacter = 0;
    };
    $('#gamegif').attr('src', thumbs[currentCharacter]);
  }

  function mute(){
    audioElement.muted = !audioElement.muted;
    
  }

  $('#gamegif').click(function() {
    $('#gamegif').attr('src', animations[currentCharacter]);
    audioElement.play();
    spanks++;
    $('#spankcounter').text(spanks);
  });
});

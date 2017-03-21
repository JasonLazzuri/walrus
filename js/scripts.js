$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus").slideToggle();
  });
  $("#reveal").click(function(){
    $("#reveal").fadeOut();
    $("#p2").fadeIn();
  });
});

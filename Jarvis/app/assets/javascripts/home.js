$(document).keydown(function(e) {
      $("#"+e.which).css("background-color", "black");
      $("#"+e.which).css("color", "red");
});
$(document).keyup(function(e) {
      $("#"+e.which).css("background-color", "white");
      $("#"+e.which).css("color", "black");
});

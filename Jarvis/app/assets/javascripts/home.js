$(document).keydown(function(e) {
  console.log(e.which);
      $("#"+e.which).css("color", "red");
});
$(document).keyup(function(e) {
      $("#"+e.which).css("color", "black");
});

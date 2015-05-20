
$("#L").on('click', function(e){
  alert("The paragraph was clicked.");
  $("#r1").css("color", "red");
});

$(document).keydown(function(e) {
  console.log(e.which);
      $("#"+e.which).css("color", "red");
});
$(document).keyup(function(e) {
      $("#"+e.which).css("color", "black");
});

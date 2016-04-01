
$(document).ready(function() {
  $("form").submit(function(event) { // takes the user input
    event.preventDefault();
    var formInput = parseInt($("#input").val());
    var final = calculation(formInput);
    $(".output").text(final);
  });
});

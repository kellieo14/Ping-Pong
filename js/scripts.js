var calculation = function(inputNumber) {
  for (i=0; i<inputNumber; i++) {
    var three = (inputNumber % 3);
    var five = (inputNumber % 5);
    var fifteen = (inputNumber % 15);
  }
    if (fifteen === 0) {
    var result = "pingpong";
  } else if (five === 0) {
    var result = "pong";
  } else if (three === 0) {
    var result = "ping";
  } else {
    var result = inputNumber(i);
}
  return result;
};

$(document).ready(function() {
  $("form").submit(function(event) { // takes the user input
    event.preventDefault();
    var formInput = parseInt($("#input").val());
    var final = calculation(formInput);
    $(".output").text(final);
  });
});

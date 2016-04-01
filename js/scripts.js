var numberArray = function(inputNumber) {
    var resultArray = [];
    for (i=1; i<=inputNumber; i++) {
       resultArray.push(i);
    }
    return resultArray;
}


var pingPong = function (inputNumber) {
  var three = (inputNumber % 3);
  var five = (inputNumber % 5);
  var fifteen = (inputNumber % 15);
  for (i=0; i<=inputNumber; i++) {

      if (fifteen === 0) {
      var result = "pingpong";
    } else if (five === 0) {
      var result = "pong";
    } else if (three === 0) {
      var result = "ping";
    } else {
      var result = i-1;
      console.log(inputNumber);
    }
  }
  return result;
}

$(document).ready(function() {
  $("form").submit(function(event) { // takes the user input
    event.preventDefault();
    var formInput = parseInt($("#input").val());
    var array = numberArray(formInput);
    var final = pingPong(formInput);
    $(".output").text(final);
  });
});

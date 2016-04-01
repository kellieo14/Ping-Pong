var numberArray = function(inputNumber) {
    var resultArray = [];
    for (i = 1; i <= inputNumber; i++) {
       resultArray.push(i);
    }
    return resultArray;
}

var pingPong = function (array) {
  var result;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 15 === 0) {
      result = "pingpong";
    } else if (array[i] % 5 === 0) {
      result = "pong";
    } else if (array[i] % 3 === 0) {
      result = "ping";
    } else {
      result = i + 1;
    }
    $(".output").append($("<li>").text(result));
  }
}

$(document).ready(function() {
	$("button").click(function(event) {
    event.preventDefault();
    var formInput = parseInt($("#input").val());
    var array = numberArray(formInput);
    pingPong(array);
  });
});

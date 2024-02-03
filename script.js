var numOfClicks = 0;

$(document).ready(function () {
  $("#click-button").on("click", function () {
    numOfClicks += 2;
    document.getElementById("click-counter").innerHTML = numOfClicks;
  });
});

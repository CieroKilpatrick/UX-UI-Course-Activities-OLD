// Event Listener on Button
$("#submit").click(function() {

  // Save name as a variable
  var name = $("#name").val();

  // Set the HTML of the paragraph element
  $("#buttonPusherInfo").html(name + " was the last person to push the button.");

  // Set input value to be blank.
  $("#name").val("");

});


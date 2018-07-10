// Click handler which shows Harry Potter
$("#spell-button").click(function() {
  $("#harry-potter").show();
});

// Bonus 1 - Button which hides Harry Potter
$("#apparate-button").click(function() {
  $("#harry-potter").hide();
});

// Bonus 2 - Button which removes Harry Potter forever
$("#dementor-button").click(function() {
  $("#harry-potter").remove();

  // Bonus 4 - add bg-dark bootstrap class to body when dementor button is clicked
  $("body").addClass("bg-dark");
});

// Bonus 3 - Button which hides another button
$("#patronus-button").click(function() {
  $("#dementor-button").hide();
});

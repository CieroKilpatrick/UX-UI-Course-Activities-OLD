// event listener for form submission
$("#sendEmail").click(function () {

  // save firstName to a variable
  var firstName = $("#firstName").val();

  if (firstName === "") {
    $(".modal-body").html("Sorry, some required fields are missing.");
  }
  else {
    // insert HTML into modal
    $(".modal-body").html("Thank you, " + firstName + ". Your message has been sent!");

    // clear the form
    $(".form-control").val("");
  }

});

// event listener for form submission
$("#sendEmail").click(function () {

  // save firstName to a variable
  var firstName = $("#firstName").val();

  // insert HTML into modal
  $(".modal-body").html("Thank you, " + firstName + ". Your message has been sent!");

  // clear the form
  $(".form-control").val("");

});


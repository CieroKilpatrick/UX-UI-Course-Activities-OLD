/* OLD CODE:
$('#slate').click(function () {
  $('#theme-stylesheet').attr({ href: 'https://bootswatch.com/4/slate/bootstrap.css'});
});
$("#solar").click(function () {
  $('#theme-stylesheet').attr({href: 'https://bootswatch.com/4/solar/bootstrap.css'});
});
*/

/* NEW CODE: */
// add a click event handler for all buttons
$('.theme-button').click(function () {
  // store the id of the button that was clicked ($(this)) in the 'theme' variable
  var theme = $(this).attr('id');

  // store a reference to the element with the id 'theme-stylesheet'
  var $styleLink = $('#theme-stylesheet');

  /* YOUR CODE GOES HERE */
  // if the id of the button that was clicked was 'X':
    // inside condition:
    // set the href attribute of the element with the id 'theme-stylesheet' to our new theme 'X' css url
});

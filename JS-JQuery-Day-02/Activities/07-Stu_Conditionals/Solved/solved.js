// $('#slate').click(function () {
//   $('#theme-stylesheet').attr({ href: 'https://bootswatch.com/4/slate/bootstrap.css'});
// });
// $("#solar").click(function () {
//   $('#theme-stylesheet').attr({href: 'https://bootswatch.com/4/solar/bootstrap.css'});
// });


// change stylesheet with conditionals

// add a click event listener to the element with the class `theme-button`
$('.theme-button').click(function () {
  // store the id of the button that was clicked ($(this)) in the 'theme' variable
  var theme = $(this).attr('id');

  // store a reference to the element with the id 'theme-stylesheet'
  var $styleLink = $('#theme-stylesheet');

  // if the id of the button that was clicked was 'simplex' ...
  if (theme === 'slate') {
    // set the href attribute of the element with the id 'theme-stylesheet' to our new theme css url, https://bootswatch.com/4/simplex/bootstrap.css
    $styleLink.attr({ href: 'https://bootswatch.com/4/slate/bootstrap.css' });
  }
  else if (theme === 'solar') {
    $styleLink.attr({ href: 'https://bootswatch.com/4/solar/bootstrap.css' });
  }
});

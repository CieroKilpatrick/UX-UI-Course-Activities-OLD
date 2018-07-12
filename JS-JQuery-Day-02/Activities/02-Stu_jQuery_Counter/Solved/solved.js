// Set counter default to zero
var counter = 0;

// Display total
$('#counter').text(counter);

// When button is clicked
$('#add').click(function () {
  // Add 1 to counter
  counter = counter + 1;
  // Display total
  $('#counter').text(counter);
});

// Subtract
$('#subtract').click(function () {
  counter = counter - 1;
  // Display total
  $('#counter').text(counter);
});

// Reset
$('#reset').click(function () {
  counter = 0;
  // Display total
  $('#counter').text(counter);
});

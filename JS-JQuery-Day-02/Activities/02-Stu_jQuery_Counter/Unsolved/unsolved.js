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

// CODE GOES HERE

// 1. When button is clicked decrement by 1 and display the total

// 2. When button is clicked reset the total

// Regular
$(".btn-primary").click(function() {
  $(".alert-info").show();
});

// Bonus
$(".btn-danger").click(function() {
  $(".alert-danger").show();
});

// Bonus Listeners for Alert Dismissal
$("#saveClose").click(function() {
  $(".alert-info").hide();
});

$("#deleteClose").click(function() {
  $(".alert-danger").hide();
});

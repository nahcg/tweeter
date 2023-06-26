// $(document).ready(function() {
//   // // --- our code goes here ---
//   // $("#tweetarea").on('click', function() {
//   //   alert("keyup"); //The this keyword is a reference to the button

//   // });

//   $('#tweetarea').on('keyup', function() {
//     // var currentlength = $(this).val().length;
//     // var remaining = maxlength-currentlength;
//     countTo = $this.attr('output');
//     $({ countNum: $this.text()}).animate({
//       countNum: countTo
//     }
//   });
// });

$(document).ready(function() {
  $('#tweetarea').keyup(function() {
    var currentlength = $(this).val().length;
    $("#output").html(currentlength);
    if (currentlength > 140) {
      $("#output").addClass('red');
    } else {
      $("#output").removeClass('red');
    }
  });
});

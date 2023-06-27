// jQuery function, adds css class to turn counter red when count greater than 140

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

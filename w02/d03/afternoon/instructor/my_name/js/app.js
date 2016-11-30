$(function() {

  // The DOM has safely loaded, add your code in here
  $('#btn-show').on('click', function() {
    console.log('User clicked on show button');

    var firstName = $('#fname').val();
    var lastName = $('#lname').val();

    console.log(firstName, lastName);

    $('#first').text(firstName);
    $('#second').text(lastName);
  });
});

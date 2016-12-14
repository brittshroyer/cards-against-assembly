$(function() {
  $('#btn-show').on('click', function(event){

    var firstName = $('#fname').val();
    var lastName = $('#lname').val();

    $('#first').text(firstName);
    $('#second').text(lastName);

    $('#fname').css({
      'display': 'none'
    })
  });

  // The DOM has safely loaded, add your code in here

});

console.log('app.js loaded');

$(function() {
  $('.desc').text('This is a great practice app');

  $('a').on('click', function(e) {
    var linkText = $(this).text();

    console.log('linkText', linkText);

    $('.destination').text(linkText);

    e.preventDefault();
  });

});

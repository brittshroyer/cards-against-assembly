$(function() {

  // The DOM has safely loaded, add your code in here
  $('#filtered-input').on('keypress', function(e) {
    var key = e.keyCode || e.which;

    console.log('Key was pressed', key);

    if (key === 88 || key === 120) {
      e.preventDefault();
    }
  });
});

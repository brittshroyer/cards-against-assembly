console.log('app.js loaded');

$(function() {
  // DOM has loaded
  $('.form').on('submit', function(e) {
    console.log('User submitted form');

    // Stop the form from submitting
    e.preventDefault();

    $('#results').empty();

    var movieTitle = $('#movie-title').val();

    console.log('Movie title:', movieTitle);

    var request = $.ajax({
      url: 'http://www.omdbapi.com/',
      data: {
        s: movieTitle
      }
    });

    request.done(function(data) {
      var searchResults = data.Search;

      // console.log('Response data:', searchResults);

      for (var i=0, x=searchResults.length; i<x; i++) {
        console.log('Movie: ', searchResults[i]);
        var movie = searchResults[i];

        // Solution 1
        var $movieImg = $('<img />')
                          .attr('src', movie.Poster)
                          .attr('height', 250)
                          .attr('alt', movie.Title);
        var $col1 = $('<div />')
                      .addClass('col-md-4')
                      .append($movieImg);
        var $title = $('<h2 />')
                      .text(movie.Title);
        var $col2 = $('<div />')
                      .addClass('col-md-8')
                      .append($title);
        var $row = $('<div />')
                      .addClass('row')
                      .append($col1, $col2);
        var $li = $('<li />')
                      .append($row);
        $('#results').append($li);

        // Solution 2
        // var elements = ['<li>',
        //                   '<div class="row">',
        //                     '<div class="col-md-4">',
        //                       '<img src="' + movie.Poster + '" height="250" alt="" />',
        //                     '</div>',
        //                     '<div class="col-md-8">',
        //                       '<h2>' + movie.Title + '</h2>',
        //                     '</div>',
        //                   '</div>',
        //                 '</li>'
        //                ].join('');
        // $('#results').append(elements);

        // Solution 3
        // var li = '<li>' +
        //   '<div class="row">' +
        //     '<div class="col-md-4">' +
        //       '<img src="' + movie.Poster + '" height="250" alt="" />' +
        //     '</div>' +
        //     '<div class="col-md-8">' +
        //       '<h2>' + movie.Title + '</h2>' +
        //     '</div>' +
        //   '</div>' +
        // '</li>';
        // $('#results').append(li);
      }
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log('Error:', textStatus, errorThrown);
    });
  });





});

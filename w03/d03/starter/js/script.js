
// http://api.giphy.com/v1/gifs/random


$(function() {

  // DOM has loaded

  // Start with pseudocode!

  var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  // var key = 'dc6zaTOxFJmzC&tag';


  $('#refresh').on('click', function(e){

    $('#random').empty();
    var request = $.get(url,function(response){
      // console.log(request);

      var x = request.responseJSON;
      var y = x.data;
      // console.log(y);

      var source = y.image_url;







    var elements = '<img src='+source+'>';

    $('#random').append(elements);


    });
  });

  $('#trending-results').ready(function(e){
    var url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
    var request = $.get(url, function(response){
      // console.log(request);
      var objectList = request.responseJSON.data;

      var images =[];

      for(var i = 0; i<objectList.length; i++){
          var pic = objectList[i];
          var img_object = pic.images.downsized;
          var img_url = pic.images.downsized.url;
          var img_placeholder = '<img src=' + img_url + '>';
          images.push(img_placeholder);

          for(var w=0; w < images.length; w++){
            $('#trending-results').append(images[w]);
            $('#trending-results').empty();
          }
        }

















  });

  });
});







      // console.log(array.length);



        //put all of these images in an array and then use setinterval to iterate thru it




        // $('#trending-results').append(img_placeholder);

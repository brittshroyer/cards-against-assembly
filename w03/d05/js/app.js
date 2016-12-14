console.log('app.js loaded');


$(function(){

  getContent();


  $('a').on('click', getContent);

  function getContent(){
    this.text = this.text || "";
    var url = 'https://www.reddit.com/'+this.text+'.json';
      $('#ul').empty();
      $.get(url, function(response){

        var titleObject = response.data.children;
        for(var i =0; i<titleObject.length; i++){
          var titleUrl = titleObject[i].data.title;
          var imgUrl = titleObject[i].data.thumbnail;
          var link = titleObject[i].data.url;
          var score = titleObject[i].data.score;
          var fullList = ['<li>','<h6>' + score + '</h6>', '<h3>', '<a href="'+link +'">'  + titleUrl + '</a>','</h3>','<img src='+imgUrl+'>','</li>'].join('');
          // $('#ul').append(fullList);

          var contentArray = [];
          contentArray.push(fullList);
          setInterval(function(){
            $('#main').append(contentArray[i]);
          }, 3000);

        }







    })
  }


});

$(function(){

// Load initial blog posts

function loadBlogPosts(){
  $.get('/blogapi',function(res){

    res.forEach(function(post, index){
      var title = post.title;
      var content = post.content;
      var author = post.author;
      var id = post._id;

      var blogPost = [
        '<li>',
          '<div class="post">',
              '<section class="title">',title,'</section>',
              '<section class="content">',content,'</section>',
              '<section class="author">',author,'</section>',
            '</div>',
          '</li>'
      ].join('');

      $('.main-content').find('ul.posts').prepend(blogPost);
    });

  });
};

function addEventListeners(){

};

function main(){
  addEventListeners();
  loadBlogPosts();
}

main();

});

$(function(){

function loadBlogPosts(){
  $.get('/blogapi',function(res){

    res.forEach(function(post, index){
      var title = post.title;
      var content = post.content;
      var author = post.author;
      var id = post._id;

      var blogPost = [
        '<li>',
          '<div class="post" data-postid=',id,'>',
              '<section class="title">',title,'</section>',
              '<section class="content">',content,'</section>',
              '<section class="author">',author,'</section>',
              '<a class="edit-post" href="#">Edit </a>',
              '<a class="delete-post" href="#">Delete</a>',
            '</div>',
          '</li>'
      ].join('');

      $('.main-content').find('ul.posts').prepend(blogPost);
    });

  });
};

function addEventListeners(){

  $('body').on('click','a.edit-post',function(event){
    event.preventDefault();

    var $post = $(this).closest('.post');
    var postId = $post.data('postid');

    var postTitle = $post.find('.title').text();
    var postContent = $post.find('.content').text();

    $post.html( [
      '<input class="edit-title" name="title" value="',postTitle,'"/>',
      '<textarea class="edit-content" name="content">',postContent,'</textarea>',
      '<button class="send-update">Update</button>'
    ].join('') );

  });

  $('body').on('click','.send-update',function(e){
    e.preventDefault();

    var $post = $(this).closest('.post');
    var title = $post.find('.edit-title').val();
    var content = $post.find('.edit-content').text();
    var id = $post.data('postid');

    console.log('title: ', title);
    console.log('content: ', content);

    var updatePost = $.ajax({
      url: '/blogapi',
      method: 'PUT',
      data: {
        title: title,
        content: content,
        id: id
      }
    });

    updatePost.done(function(res){
      console.log(res);
      $post.html( [
        '<section class="title">',title,'</section>',
        '<section class="content">',content,'</section>',
        '<section class="author">dirkdunn</section>',
        '<a class="edit-post" href="#">Edit </a>',
        '<a class="delete-post" href="#">Delete</a>',
      ].join('') );
    });

    updatePost.fail(function(err){
      console.error('There was an error: ', err);
    });
  });


};

function main(){
  addEventListeners();
  loadBlogPosts();
}

main();
});

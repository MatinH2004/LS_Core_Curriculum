let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut <strong>perspiciatis</strong> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
}

post.tags = ['Food', 'Cooking', 'Vegetables'];


let posts = [
  {
    title: 'voluptate velit',
    published: 'April 2, 2015',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
  }
];

posts.push(post);

// wrap body text in paragraph element
posts = posts.map(article => {
  return {
    'title': article.title,
    'published': article.published,
    'body': '<p>' + article.body + '</p>',
  }
});

$(() => {
  Handlebars.registerPartial('tag', $('#tag').html());
  let postsTemplate = Handlebars.compile(document.getElementById('posts').innerHTML);
  
  $('body').append(postsTemplate({ posts: posts }));
});


// $(() => {
//   Handlebars.registerPartial('tag', $('#tag').html());
//   let postsTemplate = Handlebars.compile($('#posts').html());

//   post.body = '<p>' + post.body + '</p>';

//   $('body').append(postTemplate(post));
//   $('body').append(postsTemplate({ posts: posts }));
// });
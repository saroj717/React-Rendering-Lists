var posts = [{
  id: '1',
  body: 'Love For All, Hatred For None.',
  user: 'Khalifatul Masih III',
  comments: [{
    id: '1',
    body: 'Word.',
    user: 'John Doe'
  }]
}, {
  id: '2',
  body: 'Change the world by being yourself.',
  user: 'Amy Poehler',
  comments: [{
    id: '2',
    body: 'I am always myself, how come the world no change?',
    user: 'John Doe'
  }, {
    id: '3',
    body: 'Then change yourself.',
    user: 'Amy Poehler'
  }]
}, {
  id: '3',
  body: 'Every moment is a fresh beginning.',
  user: 'T.S Eliot',
  comments: []
}, {
  id: '4',
  body: 'Never regret anything that made you smile.',
  user: 'Mark Twain',
  comments: [{
    id: '4',
    body: 'Like tipping that glass of milk over?',
    user: 'John Doe'
  }, {
    id: '5',
    body: 'Please stop trolling sir.',
    user: 'Amy Poehler'
  }]
}];

var Post = function Post(props) {
  var post = props.post;
  var comments = post.comments;


  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      post.body,
      ' -  ',
      post.user
    ),
    comments.map(function (comment) {
      return React.createElement(
        'p',
        { key: comment.id, className: 'ml-3' },
        comment.body,
        ' - ',
        comment.user
      );
    })
  );
};

var Feed = function Feed(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Feed'
    ),
    props.posts.map(function (post) {
      return React.createElement(Post, { key: post.id, post: post });
    })
  );
};

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(Feed, { posts: posts }));
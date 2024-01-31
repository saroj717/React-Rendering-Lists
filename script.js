var posts = [{
  id: '1',
  body: 'Love For All, Hatred For None.',
  user: 'Khalifatul Masih III'
}, {
  id: '2',
  body: 'Change the world by being yourself.',
  user: 'Amy Poehler'
}, {
  id: '3',
  body: 'Every moment is a fresh beginning.',
  user: 'T.S Eliot'
}, {
  id: '4',
  body: 'Never regret anything that made you smile.',
  user: 'Mark Twain'
}];

var Post = function Post(props) {
  var post = props.post;
  return React.createElement(
    'p',
    null,
    post.body,
    ' - ',
    post.user
  );
};

var Feed = function Feed(props) {
  var posts = props.posts.map(function (post) {
    return React.createElement(Post, { key: post.id, post: post });
  });
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'First feed'
    ),
    posts,
    React.createElement('hr', null),
    React.createElement('hr', null),
    React.createElement(
      'p',
      null,
      'Second feed, same as first, no issues'
    ),
    posts
  );
};

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(Feed, { posts: posts }));
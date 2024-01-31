const posts = [
  {
    id: '1',
    body: 'Love For All, Hatred For None.',
    user: 'Khalifatul Masih III'
  },{
    id: '2',
    body: 'Change the world by being yourself.',
    user: 'Amy Poehler'
  },{
    id: '3',
    body: 'Every moment is a fresh beginning.',
    user: 'T.S Eliot'
  },{
    id: '4',
    body: 'Never regret anything that made you smile.',
    user: 'Mark Twain'
  },
]

const Feed = (props) => {
  const posts = props.posts.map(post => <p key={post.id}>{post.body} - {post.user}</p>);
  return (
    <div>{posts}</div>
  )
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Feed posts={posts} />);
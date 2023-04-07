import classes from './BlogPosts.module.css';

function BlogPosts(props) {
  return (
    <ul className={classes.posts}>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;

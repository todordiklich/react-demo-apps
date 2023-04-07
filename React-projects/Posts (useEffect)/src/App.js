import { useEffect, useState } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  function addNewPostHandler(post) {
    setPosts((prev) => [post, ...prev]);
  }

  return (
    <>
      <NewPost onAddNewPost={addNewPostHandler} />
      <BlogPosts posts={posts} />
    </>
  );
}

export default App;

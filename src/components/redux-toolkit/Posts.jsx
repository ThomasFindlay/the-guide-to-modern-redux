import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/posts.slice";

const Posts = () => {
  const { posts, isLoadingPosts } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Redux Toolkit Example</h1>
      {isLoadingPosts ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {posts.map(post => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Posts;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "./store/posts.actions";

const Posts = () => {
  const { posts, isLoadingPosts } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  return (
    <div>
      <h1>Pure Redux Example</h1>
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

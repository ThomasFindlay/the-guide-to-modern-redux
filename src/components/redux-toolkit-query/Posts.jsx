import { useGetPostsQuery } from "./store/posts.api-slice";

const Posts = () => {
  const { isLoading: isLoadingPosts, data: posts = [] } = useGetPostsQuery();

  return (
    <div>
      <h1>Redux Toolkit Query Example</h1>
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

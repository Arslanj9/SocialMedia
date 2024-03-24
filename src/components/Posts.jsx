import { useContext } from "react";
import Post from "../components/Post";
import { postsStoreContext } from "../store/posts_store";

const Posts = () => {
  const { selectedTab, posts } = useContext(postsStoreContext);

  // console.log(posts)

  return (
    <>
      {selectedTab === "HOME" && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts.map((post, index) => (
          <div key={index} style={{ flex: '0 0 20%', padding: '10px' }}> {/* Each post takes up one-third of the container width */}
            <Post post={post} />
          </div>
        ))}
      </div>
      )}
    </>
  );
};

export default Posts;

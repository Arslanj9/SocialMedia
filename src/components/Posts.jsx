import { useContext } from "react";
import Post from "../components/Post";
import { postsStoreContext } from "../store/posts_store";

const Posts = () => {
  const { selectedTab, posts } = useContext(postsStoreContext);

  return (
    <>
      <div className="d-flex">
        {selectedTab === "HOME" && <Post />}
        {selectedTab === "HOME" && <Post />}
        {selectedTab === "HOME" && <Post />}
      </div>
    </>
  );
};

export default Posts;

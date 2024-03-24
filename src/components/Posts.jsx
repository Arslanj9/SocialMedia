import { useContext } from "react";
import Post from "../components/Post";
import { postsStoreContext } from "../store/posts_store";

const Posts = () => {
  const { selectedTab, posts } = useContext(postsStoreContext); 

  console.log(posts)

  return (
    <>

      {selectedTab === "HOME" &&
      <div className="d-flex">
       {posts.map((post, index) => 
        <Post 
          key={index}
          postHeading={post.heading}
          postText={post.text}
        />
        )}
      </div>
      }
    </>
  );
};

export default Posts;

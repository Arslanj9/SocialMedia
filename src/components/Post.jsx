import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { postsStoreContext } from "../store/posts_store";

const Post = ({ post }) => {

  const {handleDeletePost} = useContext(postsStoreContext)

  const deletePost = () => [
    
  ]

  return (
    <>
      <div className="card ms-4 mt-4" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.body}
          </p>
          { post.tags.map((tag, index) => <span key={index} className="badge text-bg-primary me-2">{tag}</span>) }
        </div>
        <span 
          style={{cursor: "pointer", opacity: "60%", height: '33px'}} 
          className="position-absolute cursor-pointer pe-auto top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => handleDeletePost(post.id)}
        >
        <ImCross style={{fontSize: "13px"}}/>
        </span>
      </div>
    </>
  );
};

export default Post;

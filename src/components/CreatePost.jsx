import React from "react";
import { useContext, useRef } from "react";
import { postsStoreContext } from "../store/posts_store";

const CreatePost = () => {
  const {selectedTab, handleAddPost} = useContext(postsStoreContext);

  let heading = useRef()
  let text = useRef()

  const handleSubmit = () => {
    handleAddPost(heading.current.value, text.current.value);
    heading.current.value = "";
    text.current.value = "";
  }

 
  return (
    <>
      {selectedTab === "CREATE_POST" && (
        <form className="w-50 m-5">
          <div className="form-group">
            <label htmlFor="title"><strong>Title</strong></label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              ref={heading}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="body"><strong>Content</strong></label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              placeholder="Content"
              ref={text}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="body"><strong>Tags</strong></label>
            <input
              type="tags"
              className="form-control"
              id="tags"
              placeholder="Please provide comma separated values"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-25" onClick={() => handleSubmit()}>
            Post
          </button>
        </form>
      )}
    </>
  );
};

export default CreatePost;

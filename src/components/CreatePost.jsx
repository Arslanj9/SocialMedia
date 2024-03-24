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
        <form className="w-25 m-5">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              ref={heading}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="body">Content</label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              placeholder="Content"
              ref={text}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-50" onClick={() => handleSubmit()}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default CreatePost;

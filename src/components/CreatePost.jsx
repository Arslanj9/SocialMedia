import React from "react";
import { useContext, useRef } from "react";
import { postsStoreContext } from "../store/posts_store";

const CreatePost = () => {
  const {selectedTab, addPost} = useContext(postsStoreContext);

  let heading = useRef()
  let text = useRef()

  const handleSubmit = () => {
    addPost(heading.current.value, text.current.value);
    heading.current.value = "";
    text.current.value = "";
  }

 
  return (
    <>
      {selectedTab === "CREATE_POST" && (
        <form className="w-25 m-5">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
              ref={heading}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputPassword1">Body</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Body"
              ref={text}
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary mt-3 w-50" onClick={() => handleSubmit()}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default CreatePost;

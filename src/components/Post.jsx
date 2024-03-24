const Post = ({postHeading, postText}) => {
  return (
    <>
      <div className="card ms-4 mt-4" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{postHeading}</h5>
          <p className="card-text">
            {postText}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Post;

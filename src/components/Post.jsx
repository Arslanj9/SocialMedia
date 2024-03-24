const Post = ({ post }) => {
  return (
    <>
      <div className="card ms-4 mt-4" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.body}
          </p>
          { post.tags.map((tag) => <span class="badge text-bg-primary me-2">{tag}</span>) }
        </div>
      </div>
    </>
  );
};

export default Post;

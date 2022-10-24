const ResultsPage = ({ post }) => {
  if (!post?.body) {
    return (
      <div className="resultspage">
        <p>No post received</p>
      </div>
    );
  }

  return (
    <div className="resultspage">
      <h2>Result - Global State</h2>
      <p>Title: {post.title}</p>
      <p>ID: {post.id}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default ResultsPage;

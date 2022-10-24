import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ post, setPost }) => {
  const navigate = useNavigate();
  const [tessId, setTessId] = useState("");

  const getPost = async () => {
    const post = Math.floor(Math.random() * 10) + 1;
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  const idHandler = (e) => {
    setTessId(e.target.value);
  };

  const updateId = () => {
    // store.set("tessituraId", tessId);
  };

  const getId = () => {
    // const store = new Store();
    // const id = store.get("tessituraId");
    // console.log("id", id);
    // setTessId(id);
  };

  return (
    <div className="homepage">
      <button className="btn" onClick={getPost}>
        Get Post
      </button>
      {post && <Form post={post} setPost={setPost} />}
      {post && (
        <button className="btn" onClick={() => navigate("/results")}>
          Next Page
        </button>
      )}
      <input type="text" value={tessId} onChange={idHandler}></input>
      <button className="btn" onClick={updateId}>
        Update ID
      </button>
      <p>ID:</p>
      <button className="btn" onClick={getId}>
        Get ID
      </button>
    </div>
  );
};

const Form = ({ post, setPost }) => {
  const formHandler = (e) => {
    const copy = { ...post };
    copy[e.target.name] = e.target.value;
    setPost(copy);
  };

  return (
    <form>
      {" "}
      <label>
        Post ID
        <input name="id" type="text" value={post.id} onChange={formHandler} />
      </label>
      <label>
        Post Title
        <input
          name="title"
          type="text"
          value={post.title}
          onChange={formHandler}
        />
      </label>
      <label>
        Post Body
        <textarea
          name="body"
          type="text"
          value={post.body}
          onChange={formHandler}
        />
      </label>
    </form>
  );
};

export default HomePage;

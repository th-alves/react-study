import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };
    await blogFetch.post("/posts", {
      body: post,
    });
    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Insert a new post</h2>
      <form action="#" onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Type the title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Content:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Type the content"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Create new post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;

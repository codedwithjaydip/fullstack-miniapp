import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post("http://localhost:3000/create-post", formData).then(() => {
      navigate("/feed");

      alert("Post created successfully!");
      e.target.reset();
    });
  };

  return (
    <section className="create-post-section">
      <h1>Create post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          required
          placeholder="Enter caption"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default CreatePost;

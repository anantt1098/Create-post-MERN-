import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData
      );

      console.log(res.data);
      navigate("/feed");
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    }
  };

  return (
    <section className="create-post-section">
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>

        <input
          type="file"
          name="image"
          accept="image/*"
          required
        />

        <input
          type="text"
          name="caption"
          placeholder="Enter caption"
          required
        />

        <button type="submit">
          Submit
        </button>

        <h3
          style={{
            textAlign: "center",
            color: "#666",
            fontWeight: "500",
          }}
        >
          OR
        </h3>

        <button
          type="button"
          className="nav-btn"
          onClick={() => navigate("/feed")}
        >
          Go to Feed
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
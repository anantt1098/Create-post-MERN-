import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Feed = () => {
    const navigate = useNavigate()
  const [posts, setPosts] = useState([
    // {
    //   _id: "1",
    //   image:
    //     "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600",
    //   caption: "Beautiful Nature",
    // },
  ]);

  useEffect(()=>{

    axios.get("http://localhost:3000/posts")
    .then((res)=>{
       setPosts(res.data.posts)
    })

  },[])

  return (
    <section className="feed-section">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <img src={post.image} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
      <button onClick={()=>navigate("/")}>go to create post</button>
    </section>
  );
};

export default Feed;
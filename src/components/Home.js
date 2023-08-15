import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from '../firebase'

function Home() {
  const [posts, setPosts] = useState([]);

  // we will use useEffect function to make callback
  useEffect(() => {
    db
    .collection("posts")
    .get()
    .then((snapshot) => {
      // we have exported db from firebase js if it was firebase then type firebase
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      console.log('posts', posts)
      setPosts(posts);
    })
    // above line is firebase mounting
  }, []);
  return <div className="home">
            <h1>Tech Blog</h1>
            <div id="blog-by"> Tech Blog By Rohan</div>
            {posts.map((post, index) => (
              <div className="post" key={`post-${index}`}>
                <Link to={`/post/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.subtitle}</p>
              </div>
          ))}
          </div>
}

export default Home;

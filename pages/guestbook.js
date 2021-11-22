import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const axios = require('axios');

const Guestbook = () => {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios.get('http://localhost:3000/api/guestbook');
      console.log('the data', data.posts);
      if (data.posts.length) {
        const updatedData = data.posts;
        setPosts(updatedData);
      }
    } catch (error) {
      console.log('Error fetching the data', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log('posts', posts);
  return (
    <div className="container feed">
      <h1>Messages</h1>
      <div >
        {posts.map((post) => {
          return (
            <div className="post" key={post.name}>
              {' '}
              Name: {post.name} <br />
              Message: {post.message}{' '}
            </div>
          );
        })}
      </div>
      <Link href="/">
        <a>Make A New Post!</a>
      </Link>
    </div>
  );
};

export default Guestbook;

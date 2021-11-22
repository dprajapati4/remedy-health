import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPosts } from './api/main'

const Guestbook = () => {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    try {
      const { data } = await getPosts();
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

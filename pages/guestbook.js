import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const axios = require('axios');

const Guestbook = () => {
  const [posts, setPost] = useState([]);

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });
    return (
    <div>
      <h1>This is the Feed</h1>
      <div>
        Name
        message
      </div>
      <Link href="/">
        <a>Make a new post</a>
      </Link>
    </div>
  );
}

export default Guestbook;
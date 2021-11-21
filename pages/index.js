// import Layout from '../components/layout';
// import '../styles/global.css'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const axios = require('axios');

export default () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function submitData() {
    try {
      await axios.post('http://localhost:3000/api/guestbook', {
        name: name,
        message: message,
      });
    } catch (error) {
      console.log('Error submitting post', error);
    }
  }

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    submitData(e);
    setName("")
    setMessage("")
  };
  return (

    <div className="feed-container">
      <Link href="/guestbook">
        <a>See all Posts!</a>
      </Link>
      <form id="form" name="guestform" onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="message"> Message: </label>
        <textarea
          name="message"
          form="guestform"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>

  );
};



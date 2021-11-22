import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createPost } from './api/main';

export default () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function submitData() {
    try {
      await createPost({
        name: name,
        message: message,
      });
    } catch (error) {
      console.log('Error submitting post', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(e);
    setName('');
    setMessage('');
    alert('Form submitted');
  };
  return (
    <div className="container">
    <h1> Remedy Health Form </h1>
    <div >
      <form
        className=".was-validated"
        id="form"
        name="guestform"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            required
            className="form-control"
            id="message"
            rows="3"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </div>
      <Link href="/guestbook">
        <a>See All Posts!</a>
      </Link>
    </div>
  );
};

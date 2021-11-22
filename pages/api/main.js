import axios from 'axios'

export const createPost = async data => {
  try {
    const response = await axios.post('/api/guestbook',
     data )
    return {
      data: response.status
    }
  }
  catch (err) {
    return err;
  }
}

export const getPosts = async () => {
  try {
    const response = await fetch('/api/guestbook')
    const result = await response.json();
    return {
      data: result
    }
  }
  catch (err) {
    return err;
  }
}
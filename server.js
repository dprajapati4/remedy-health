const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const posts = []

app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  server.post('/api/guestbook', (req, res, next) => {
    // A POSTED REQUEST HERE
    const {name, message } = req.body
    try {
      const post = {
        name,
        message
      }
      posts.push(post)
      res.json(posts).status(200)
    } catch (err) {
      console.log('Error in post form data route')
      next(err)
    }
  })

  server.get('/api/guestbook', (req, res, next) => {
    res.send({
      posts
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

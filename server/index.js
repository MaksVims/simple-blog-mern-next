require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/posts', require('./routes/posts.routes'))

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`Server run PORT = ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()

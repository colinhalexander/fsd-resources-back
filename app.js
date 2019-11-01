const express = require('express')
const app = express()
const languagesRouter = require('./controllers/languages')
const PORT = process.env.PORT || '3000'

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.get("/", (request, response, next) => {
  response.send({ "hello": "world" })
})

app.use("/languages", languagesRouter)
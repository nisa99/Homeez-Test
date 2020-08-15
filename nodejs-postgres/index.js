const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/quote', db.getQuote)
app.get('/quote/:id', db.getQuoteById)
app.post('/quote', db.createQuote)

app.listen(port, () => {
  console.log(`API running on port ${port}.`)
})
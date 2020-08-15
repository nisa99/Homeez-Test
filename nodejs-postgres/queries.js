const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '143',
  port: 5432,
})

const getQuote = (request, response) => {
  pool.query('SELECT * FROM quotation ORDER BY "Q_ID" ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getQuoteById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM quotation WHERE "Q_ID" = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const createQuote = (request, response) => {
  const { Quotation_Info } = request.body

  pool.query('INSERT INTO quotation ("Quotation_Info") VALUES ($1)', [Quotation_Info], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Quote added`)
  })
}



module.exports = {
  getQuote,
  getQuoteById,
  createQuote,
}


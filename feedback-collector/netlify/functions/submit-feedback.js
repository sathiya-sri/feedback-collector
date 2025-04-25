const { json } = require('@netlify/functions')
const faunadb = require('faunadb')
const q = faunadb.query

// Initialize FaunaDB client
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const data = JSON.parse(event.body)
    
    // Store feedback in FaunaDB
    const result = await client.query(
      q.Create(q.Collection('feedbacks'), {
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: data.timestamp || new Date().toISOString()
        }
      })
    )

    return json({
      statusCode: 200,
      body: JSON.stringify(result.data)
    })
  } catch (error) {
    return json({
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    })
  }
}
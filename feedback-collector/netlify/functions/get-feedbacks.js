const { json } = require('@netlify/functions')
const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('feedbacks'))),
        q.Lambda('ref', q.Get(q.Var('ref')))
      )
    )

    const feedbacks = result.data.map(item => item.data)

    return json({
      statusCode: 200,
      body: JSON.stringify(feedbacks)
    })
  } catch (error) {
    return json({
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    })
  }
}
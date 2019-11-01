const knex = require('../queries')
const express = require('express')
const router = express.Router()

router.get("/", async (request, response, next) => {
  const languages = await knex.select().from('languages')
  response.json(languages)
})

module.exports = router
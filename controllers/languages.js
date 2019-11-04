const knex = require('../config/queries')
const router = require('express').Router()

router.get("/", async (request, response, next) => {
  const languages = await knex.select().from('languages')
  response.json(languages)
})

module.exports = router
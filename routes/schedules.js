const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET schedules listing. */
router.get('/', function (req, res, next) {
  knex('schedules')
    .then((schedules) => {
      let newSchedulesArr = schedules.map((schedule) => {
        return schedule
      })
      res.status(200).send(newSchedulesArr) // 200 = ok
    })
    .catch((err) => {
      console.log('err', err)
      res.status(500).send({error: {message: 'Something went wrong!'}})
    })
})

module.exports = router

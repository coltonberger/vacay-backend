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

// get ONE schedule
router.get('/:scheduleid', (req, res, next) => {
  knex('schedules')
    .where('id', req.params.scheduleid)
    .then((schedule) => {
      let newscheduleArr = schedule.map((schedule) => {
      // console.log('schedule is', schedule)
        return schedule
      })
      console.log('the specific schedule', newscheduleArr)
      res.send(newscheduleArr)
    })
})

module.exports = router

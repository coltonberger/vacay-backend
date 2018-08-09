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

//create one schedule <<<OK>>>
router.post('/', (req, res, next) => {
  console.log('REQ.BODY', req.body);
  knex('schedules')
  .insert(
    {userId: req.body.userId},
    {eventId: req.body.eventId}
  )
  .returning('*')
  .then((result) => {
    console.log(result)
    let insertedRecord = result[0]
    console.log('data', insertedRecord)
    res.send(insertedRecord)
  })
})


// DELETE a specific schedule <<<OK>>>
router.delete('/:scheduleid', (req, res, next) => {
  // lookup a scheduleid in the DB, if exists, delete it
  knex('schedules')
  .where('id', req.params.userid)
  .del()
  .then((result) => {
    console.log('result', result)
    if( result ) {
      res.send({ 'success': result })
    } else {
      throw new Error('Couldnt find the user to delete')
    }
  })
  .catch((err) => {
    next(err)
  })
})


module.exports = router

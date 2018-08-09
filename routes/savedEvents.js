const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET savedEvent listing. */
router.get('/', function (req, res, next) {
  knex('savedEvents')
    .then((savedEvents) => {
      let newSavedEventsArr = savedEvents.map((savedEvent) => {
        return savedEvent
      })
      res.status(200).send(newSavedEventsArr) // 200 = ok
    })
    .catch((err) => {
      console.log('err', err)
      res.status(500).send({error: {message: 'Something went wrong!'}})
    })
})

// get ONE schedule
router.get('/:savedEventsid', (req, res, next) => {
  knex('savedEvents')
    .where('id', req.params.savedEventsid)
    .then((savedEvents) => {
      let newSavedEventsArr = savedEvents.map((savedEvent) => {
      // console.log('schedule is', schedule)
        return savedEvent
      })
      console.log('the specific schedule', newSavedEventsArr)
      res.send(newSavedEventsArr)
    })
})

//create one schedule <<<OK>>>
router.post('/', (req, res, next) => {
  console.log('REQ.BODY', req.body);
  knex('schedules')
  .insert(
    {userId: req.body.schedules_id},
    {eventId: req.body.events_id}
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
// router.delete('/:id', (req, res, next) => {
//   // lookup a scheduleid in the DB, if exists, delete it
//   knex('schedules')
//   .where('id', req.params.userid)
//   .del()
//   .then((result) => {
//     console.log('result', result)
//     if( result ) {
//       res.send({ 'success': result })
//     } else {
//       throw new Error('Couldnt find the user to delete')
//     }
//   })
//   .catch((err) => {
//     next(err)
//   })
// })

//DELETE one schedule
router.delete('/:id', function(req, res, next) {
  const scheduleId = req.params.id;
  console.log(scheduleId)

  knex('schedules')
    .where('id', scheduleId)
    .then((row) => {
      if(!row) return next()
      knex('schedules')
        .del()
        .where('id', scheduleId)
        .then(() => {
          res.send(`ID ${scheduleId} Deleted`)
        })
        .catch((err) => {
          console.log("Hey, could not delete!")
          next(err)
        })
    })
    .catch((err) => {
      next(err)
    })
})



module.exports = router

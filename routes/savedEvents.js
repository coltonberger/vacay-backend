const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET savedEvent listing. */
router.get('/', function (req, res, next) {
  knex
  .select('events.id','events.eventName')
  .from('events')
  .innerJoin('savedEvents', 'events_id','events.id')
  .where('events.id' !== null)
  .then(data => res.json(data));


  // knex('savedEvents')
  //   .then((savedEvents) => {
  //     res.status(200).send(savedEvents) // 200 = ok
  //   })
  //   .catch((err) => {
  //     console.log('err', err)
  //     res.status(500).send({error: {message: 'Something went wrong!'}})
  //   })
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
// router.delete('/:id', function(req, res, next) {
//   const scheduleId = req.params.id;
//   console.log(scheduleId)
//
//   knex('schedules')
//     .where('id', scheduleId)
//     .then((row) => {
//       if(!row) return next()
//       knex('schedules')
//         .del()
//         .where('id', scheduleId)
//         .then(() => {
//           res.send(`ID ${scheduleId} Deleted`)
//         })
//         .catch((err) => {
//           console.log("Hey, could not delete!")
//           next(err)
//         })
//     })
//     .catch((err) => {
//       next(err)
//     })
// })



module.exports = router

const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET savedEvent listing. */
// router.get('/:userid', function (req, res, next) {
//   knex
//   .select('events.id','events.eventName', 'events.eventCity', 'events.eventDescription' )
//   .from('events')
//   .innerJoin('savedEvents', 'events_id','events.id')
//   .innerJoin('savedEvents', 'schedules_id', 'schedules.id')
//   .innerJoin('schedule', 'users_id', 'users.id')
//   .where('users.id', req.params.usersid)
//
//   .then(data => res.json(data));
// })



// router.get('/', function (req, res, next) {
//   knex
//   .select('users.id')
//   .from('users')
//   .innerJoin('savedEvents')
//   // .where('events.id' !== null)
//   .then(data => res.json(data));
// })



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

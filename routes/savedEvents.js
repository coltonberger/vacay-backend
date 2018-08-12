const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

//Get all
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

//get one
router.get('/:savedEventsid', function (req, res, next) {
  knex('savedEvents')
    .where('id', req.params.savedEventsid)
    .then((savedEvent) => {
      let newSavedEventArr = savedEvent.map((savedEvent) => {
        return savedEvent
      })
      res.status(200).send(newSavedEventArr)
    })
    .catch((err) => {
      console.log('err', err)
      res.status(500).send({error: {message: 'Something went wrong!'}})
    })
})


//DELETE a specific schedule <<<OK>>>
router.delete('/:savedEventsid', (req, res, next) => {
  // lookup a scheduleid in the DB, if exists, delete it
  knex('savedEvents')
  .where('id', req.params.savedEventsid)
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

var express = require('express')
var router = express.Router()
const knex = require('../db/knex')
const service = require('../auth/service')

/* GET events page. */
//router.get('/', service.verifyToken, function (req, res, next) {
router.get('/', function (req, res, next) {
  console.log('req.headers.authorization', req.headers.authorization);
  knex('events')
    .then((events) => {
      let newEventsArr = events.map((event) => {
        return event
      })
      res.status(200).send({data: newEventsArr}) // 200 = ok
    })
    .catch((err) => {
      console.log('err', err)
      res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
    })
})

module.exports = router

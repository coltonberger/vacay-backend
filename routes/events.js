var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('events')
  .then((events) => {
    let newEventsArr = events.map((event) => {
      return event;
    })
    res.status(200).send(newEventsArr); // 200 = ok
  })
  .catch((err) => {
    console.log('err', err);
    res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
  })
});

module.exports = router;

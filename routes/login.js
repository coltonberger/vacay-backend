const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');
const service = require('../auth/service');

require('dotenv').config();

/* GET login page. */
router.get('/', (req, res, next) => {
  res.render('login');
});

// login USER
router.post('/', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  knex('users')
  .where('email', email)
  .first()
  .then(user => {
    console.log(user)
    if(user){
      // user bcrypt.compare to input to hashed password in DB
      let passwordGood = bcrypt.compareSync(password, user.password)

      // if all good, create token, and attach it as a cookie attached to the response
      if(passwordGood){
        //create token
        let token = service.signToken(user.id, user.email);
        console.log('token', token);
        res.status(200).send({token});

      } else {
        //throw new Error('Wrong password');
        res.status(404).send({error: {message: 'Wrong password'}})
      }
    } else {
      //throw new Error('User not found')
      res.status(404).send({error: {message: 'User not found'}})
    }
  })
  .catch((err) => {
    console.log(err)
    res.status(404).send({error: {message: err.message}})
  })
})


module.exports = router;

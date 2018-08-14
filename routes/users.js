const express = require('express')
const router = express.Router()
const knex = require('../db/knex')
const bcrypt = require('bcryptjs')
const service = require('../auth/service')

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex('users')
    .then((users) => {
      let newUsersArr = users.map((user) => {
        delete user.created_at;
        delete user.updated_at;
        return user
      })
      res.status(200).send(newUsersArr) // 200 = ok
    })
    .catch((err) => {
      console.log('err', err)
      res.status(500).send({error: {message: 'Something went wrong!'}})
    })
})

// get ONE user
router.get('/:userid', (req, res, next) => {
  knex('users')
    .where('id', req.params.userid)
    .then((user) => {
      let newUserArr = user.map((user) => {
      // console.log('user is', user)
      delete user.created_at;
      delete user.updated_at;

        return user
      })
      console.log('the specific user', newUserArr)
      res.send(newUserArr)
    })
})

// create NEW USER
router.post('/', (req, res, next) => {
  // console.log('REQ.BODY', req.body);
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let email = req.body.email
  let password = req.body.password

  // check if the email already exists:
  knex('users')
    .where('email', email)
    .first()
    .then((user) => {
      if (user) {
        console.log('email already exists')
        throw new Error('This email already exists!')
      }

      // hash the password
      let hashed = bcrypt.hashSync(password)

      // if it doesn't exist, create new user's record w/ email + hashed password
      knex('users')
        .insert({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashed
        })
        .returning('*')
        .then((result) => {
          // console.log("success")
          //console.log(result)
          let insertedRecord = result[0]
          //console.log('data', insertedRecord)
          const token = service.signToken(insertedRecord.id, insertedRecord.email)
          res.send({data: insertedRecord, token})
        })
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

module.exports = router

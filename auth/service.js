const jwt = require('jsonwebtoken')

const secrete = process.env.JWT_SIGNING_SECRET

const signToken = (id, email) => {
  return jwt.sign({ _id: id, email }, secrete, { expiresIn: 60 * 60 * 5 })
}

function verifyToken(req, res, next){
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    console.log('token', token);
    try {
      jwt.verify(token, secrete, (err, data) => {
        if (err) {
          res.status(403).send({ error: {message: 'invalid token' }});
        } else {
          return next()
        }
      })
    } catch(err) {
      console.log('jwt error:', err);
    }
  } else {
    res.status(403).send({  error: {message: 'authorization header missing'} })
  }
}

module.exports = {
  signToken: signToken, secrete: secrete,
  verifyToken: verifyToken
}

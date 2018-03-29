import err from 'http-errors'

import User from './userSchema'

function findAndSetUser(req, res, next) {
  if (!req.auth || !req.auth.token) {
    return next(err(401))
  }

  User.findOne()
    .elemMatch('tokens', { val: req.auth.token })
    .then(user => {
      if (!user) {
        return next(err(401))
      }

      req.user = user

      next()
    })
    .catch(next)
}

function extractBearer(string) {
  if (string && string.split(' ')[0] === 'Bearer') {
    return string.split(' ')[1]
  }
}

function getToken(req) {
  const headerBearer = extractBearer(req.headers.authorization)
  const cookieBearer = req.cookies.authorization

  return headerBearer || cookieBearer
}

export default function authenticate(req, res, next) {
  const token = getToken(req)

  req.auth = {
    token,
  }

  findAndSetUser(req, res, next)
}

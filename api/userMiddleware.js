import err from 'http-errors'
import uuidv4 from 'uuid/v4'

import User from './userSchema'

const oneYear = 60 * 60 * 24 * 365

export function login(req, res, next) {
  if (!req.user) {
    return next(err(500))
  }

  const token = uuidv4()

  req.user.tokens.push({
    val: token,
  })

  req.user
    .save()
    .then(savedUser => {
      res.cookie('authorization', token, {
        httpOnly: true,
        sameSite: true,
        expires: new Date(Date.now() + 1000 * oneYear),
        secure: process.env.UNSECURE_COOKIES ? false : process.env.NODE_ENV === 'production',
      })

      req.result = {
        ok: true,
      }

      next()
    })
    .catch(next)
}

export function noUserNoAccess(req, res, next) {
  if (!req.user) {
    return next(err(403))
  }

  next()
}

export function initialSetup(req, res, next) {
  User.findOne()
    .then(async user => {
      if (user) {
        return next(err(403))
      }

      const newUser = new User({ username: 'user' })
      await newUser.setPassword(req.body.password)
      await newUser.save()

      req.result = {
        ok: true,
      }

      next()
    })
    .catch(next)
}

export async function isUserSetup() {
  const user = await User.findOne()

  return !!user
}

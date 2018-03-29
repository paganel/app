import express from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import User from './userSchema'
import Feedback from './feedbackSchema'
import { login, initialSetup } from './userMiddleware'
import authenticate from './auth'

const router = new express.Router()

router.use(passport.initialize())
passport.use(new LocalStrategy(User.authenticate()))

router.get('/', (req, res, next) => {
  req.result = {
    ok: true,
  }

  next()
})

router.get('/feedback', authenticate, (req, res, next) => {
  Feedback.find()
    .sort({ createdAt: -1 })
    .then(docs => {
      req.result = docs

      next()
    })
    .catch(next)
})

router.post('/feedback', (req, res, next) => {
  Feedback.create(req.body)
    .then(doc => {
      if (doc) {
        req.result = doc
      }

      next()
    })
    .catch(next)
})

router.post('/initialSetup', initialSetup)
router.post('/login', passport.authenticate('local', { session: false }), login)

router.use((req, res, next) => {
  if (req.result) {
    return res.json(req.result)
  }

  next()
})

export default router

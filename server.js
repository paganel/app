import express from 'express'
import next from 'next'
import bodyparser from 'body-parser'
import cookieparser from 'cookie-parser'
import cors from 'cors'

import { connectSync, isEnvSetup } from './api/connect'
import { isUserSetup } from './api/userMiddleware'
import api from './api'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: '.' })
const handle = app.getRequestHandler()

connectSync()
app
  .prepare()
  .then(() => {
    const server = express()

    server.use(cors())
    server.use(cookieparser())
    server.use(bodyparser.json())
    server.disable('x-powered-by')
    server.disable('etag')

    server.use('/api', api)
    server.get('*', async (req, res) => {
      if (!isEnvSetup()) {
        return app.render(req, res, '/env', Object.assign({}, req.query, req.params))
      }

      if (!await isUserSetup()) {
        return app.render(req, res, '/setup', Object.assign({}, req.query, req.params))
      }

      return handle(req, res)
    })

    server.listen(process.env.PORT, err => {
      if (err) {
        throw err
      }

      console.log('NODE_ENV:', process.env.NODE_ENV)
      console.log('ready on port:', process.env.PORT)
    })
  })
  .catch(err => console.error(err))

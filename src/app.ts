import express from 'express'
import rateLimit from './middlewares/rate-limiter'
import customLog from './middlewares/logger'
import errorHandler from './middlewares/error.handler'
import apiRoute from './router/'
import 'dotenv/config'

const app = express()

//Custom Http logging console and local
app.use(customLog)

app.use(express.json())

// Limit repeated failed requests to auth endpoints
if (process.env.NODE_ENV === 'production') {
    app.use('/api/auth', rateLimit)
}

//routes
app.use('/api', apiRoute)

app.use(errorHandler)

app.use('*', (req, res) => {
    res.status(404).json('Not found')
})

export default app
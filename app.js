const express = require("express")
const cors = require('cors')

const iphoneRouter = require('./routes/api/iphones')
const ipadRouter = require('./routes/api/ipads')
const iwatchRouter = require('./routes/api/iwatchs')
const macRouter = require('./routes/api/macs')
const gajetRouter = require('./routes/api/gajets')
const accesoirRouter = require('./routes/api/accesoir')

const app = express()

app.use(cors())

app.use('/api/v1/iphones', iphoneRouter)

app.use('/api/v1/ipads', ipadRouter)

app.use('/api/v1/iwatchs', iwatchRouter)

app.use('/api/v1/macs', macRouter)

app.use('/api/v1/gajets', gajetRouter)

app.use('/api/v1/accesoirs', accesoirRouter)


app.use((req,res) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found'
    })
})

module.exports = app
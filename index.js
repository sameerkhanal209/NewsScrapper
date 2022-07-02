const scapper = require('./api/scrapper')
const express = require('express')
const { env } = require('process')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
    const result = await scapper.latest()
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result))
})

port = env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))
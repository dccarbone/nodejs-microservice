const express = require('express')
const app = express()
const port = 9090

app.get('/api', (req, res) =>{
    res.send('hello!!')
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
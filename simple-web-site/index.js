const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.use(express.static('public'))


app.get('/', (req, res) => {
    console.log("alguém acessou a página")
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
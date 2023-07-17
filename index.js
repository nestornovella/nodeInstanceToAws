const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) =>{
    res.send(`<h1>hola mundo la instancia funciona!</h1>`)
})


app.listen(PORT,()=>console.log('the server is listen in port ' + PORT))
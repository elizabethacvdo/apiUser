const express = require('express')
const app = express()
var cors = require('cors')

//midleware
app.use(express.urlencoded({ extended: false }))    
app.use (express.json())
app.use(cors())

//rutas

app.use(require('./routes/index'))
app.use(require('./routes/alumno'))










app.listen(3000,() => {
    console.log('listening on')
});
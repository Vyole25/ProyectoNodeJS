//Módulos
const express = require('express')
const app = express()
const router = require('../routes/index')
const path = require('path')

//Settings
app.set('port', '3000')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('html' , require('ejs').renderFile)

//Middleware
app.use(router)

//Server Listening
app.listen(app.get('port'), () => {
    console.log(`Server Running on port ${app.get('port')}`)
})


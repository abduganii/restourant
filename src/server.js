const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = require('./config')
const router = require('./modules')
const bodyParser = require("body-parser")


app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)



app.listen(PORT,console.log(PORT))
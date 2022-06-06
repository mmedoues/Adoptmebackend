require("dotenv").config({path:"./config/.env",});

const cors = require('cors')
const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const usersrouter = require('./routes/User')
const Animalrouter = require('./routes/Animal')
const User = require('./models/User')

app.use(cors())
app.use(express.json())

app.use('/api/users',usersrouter)
app.use('/api/animals',Animalrouter)


connectDB()

app.listen(6000,(err) => err ? console.log('error!',err) : console.log(`server is running on port : 6000`))


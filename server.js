require("dotenv").config({path:"./config/.env",});

const cors = require('cors')
const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const usersrouter = require('./routes/User')
const Animalrouter = require('./routes/Animal')
const User = require('./models/User')
const router = express.Router()


app.use(cors())
app.use(express.json())

router.get('/', (req, res) => {
    res.send({ message: 'welcome to adoptme'})
  })

app.use('/api/users',usersrouter)
app.use('/api/animals',Animalrouter)


connectDB()

PORT = 5000;
app.listen(process.env.PORT || PORT, (err) => {
    err ? console.log(err) : console.log(`server is running on ${PORT}`);
});

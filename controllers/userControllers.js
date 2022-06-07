const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

//Register
exports.Register = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address } = req.body
    const findUser = await User.findOne({ email })
    if (findUser) {
      return res.status(400).send({ message: 'Email should be unique!' })
    }
    const newUser = new User({ ...req.body })

    const hashedPassword = await bcrypt.hash(password, saltRounds)
    newUser.password = hashedPassword
    await newUser.save()
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: '10h',
    })

    res
      .status(200)
      .send({ message: 'User created successfully!', newUser, token })
  } catch (err) {
    res.status(500).send(err)
  }
}
//Login
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const findUser = await User.findOne({ email })
    if (!findUser) {
      return res.status(400).send({ message: 'Bad credentials' })
    }
    const comparePass = await bcrypt.compare(password, findUser.password)
    if (!comparePass) {
      return res.status(400).send({ message: 'Bad credentials' })
    }
    const token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY, {
      expiresIn: '10h',
    })
    res.status(200).send({ message: 'Login successful', findUser, token })
  } catch (err) {
    res.status(500).send(err)
  }
}

//Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).send({ msg: 'all users : ', allUsers })
  } catch (err) {
    res.status(500).send(err)
  }
}

const express = require('express')
const { getOneAnimal,getAllAnimals,addAnimal,updateAnimal,deleteAnimal } = require('../controllers/animalControllers')
const router = express.Router()

const isAuth = require('../middleware/isAuth')
const admin = require('../middleware/admin')

//get

router.get('/allAnimals',isAuth,getAllAnimals)
router.get('/oneAnimal/:id',isAuth,admin,getOneAnimal)

//post
router.post('/addAnimal', isAuth,addAnimal)

//Put
router.put('/editAnimal/:id',isAuth,updateAnimal)

//delete
router.delete('/deleteAnimal/:id',isAuth,admin,deleteAnimal)



module.exports = router
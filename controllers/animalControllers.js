const animal = require('../models/Animals')

exports.addAnimal = async (req,res) => {

    try{
    
        const findAnimal = await animal.findOne({name:req.body.name})
        if(findAnimal){
            return res.status(400).send({msg:`the animal : ${req.body.name} already exists`})
        }
        const newAnimal= new animal(req.body)
        await newAnimal.save() 
        res.status(200).send({msg:`animal : ${req.body} added succesfully`})
    }
    catch(err){
        res.status(500).send(err)
    }

}


exports.getAllAnimals = async (req,res) => {
    try{
        const allanimals = await animal.find()
        res.status(200).send({msg:'all animals : ',allanimals})
    }
    catch(err){
        res.status(500).send(err)
    }
}



exports.updateAnimal = async (req,res)=> {

    try{
        const editedanimal = await animal.updateOne({_id:req.params.id},{$set:{...req.body}})
        res.status(200).send({msg:'animal edited ',editedanimal})    }
    catch(err){
        res.status(500).send(err)
    }

}


exports.deleteAnimal = async (req,res)=> {

    try{
        const deletedAnimal = await animal.deleteOne({_id:req.params.id})
        res.status(200).send({msg:'Animal deleted ',deletedAnimal})

    }
    catch(err){
        res.status(500).send(err)
    }

}



exports.getOneAnimal = async (req,res)=> {

    try{
        const oneAnimal = await animal.findById(req.params.id)
        res.status(200).send({msg:'Animal found ',oneAnimal})
    }
    catch(err){
        res.status(500).send(err)
    }

}

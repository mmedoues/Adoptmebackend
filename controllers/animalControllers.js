const animal = require('../models/Animals')

exports.addAnimal = async (req,res) => {

    try{
    
        const findContact = await animal.findOne({name:req.body.name})
        if(findContact){
            return res.status(400).send({msg:`the animal : ${req.body.name} already exists`})
        }
        const newContact= new animal(req.body)
        await newContact.save() 
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
        const deletedcontact = await animal.deleteOne({_id:req.params.id})
        res.status(200).send({msg:'contact deleted ',deletedcontact})

    }
    catch(err){
        res.status(500).send(err)
    }

}



exports.getOneAnimal = async (req,res)=> {

    try{
        const oneContact = await animal.findById(req.params.id)
        res.status(200).send({msg:'contact found ',oneContact})
    }
    catch(err){
        res.status(500).send(err)
    }

}

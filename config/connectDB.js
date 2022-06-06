const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to Database')

    }
    catch(err){
        console.log('error!',err)

    }
}

module.exports = connectDB
const mongoose = require('mongoose')

const connectDB = async () => {
    URI="mongodb+srv://newproject:newproject@cluster1.w5d4b.mongodb.net/contactss?retryWrites=true&w=majority"
    try{
        await mongoose.connect(URI)
        console.log('connected to Database')

    }
    catch(err){
        console.log('error!',err)

    }
}

module.exports = connectDB

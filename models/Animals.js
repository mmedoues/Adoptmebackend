const mongoose = require('mongoose')

const {Schema,model} = mongoose
const UserSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    race:String
})


module.exports = User = model('Animal', UserSchema)
                                                              
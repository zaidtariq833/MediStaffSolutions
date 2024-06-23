const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userEmail:{
        type:String,
        required:[true, "Please Add Email"],
        unique:true
    },
    userPassword:{
        type:String,
        required:[true, "Please Add Password"]
    }
})

module.exports = mongoose.model("User",userSchema)


// For Test Github
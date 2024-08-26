const mongoose = require("mongoose") 
const dbConnect = async function(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log(error + " : DB Connection Failure");
    }
}


module.exports = dbConnect
 

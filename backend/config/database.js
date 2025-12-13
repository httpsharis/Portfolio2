const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        
    }).then((data) => {
        console.log(`MongoDB Connected: ${data.connection.host}`);
    }).catch((err) => {
        console.error("Mongo Connection Error:", err.message)
    })
}

module.exports = connectDatabase
const mongoose = require('mongoose');


const messageSchema = ({ 
        name: String,
        email: String,
        message: String}
)
const Message = mongoose.model('MyMessages' , messageSchema)

module.exports = mongoose.model ( 'data' , messageSchema );
 const modelSchema = require ('./modelSchems');


module.exports.getData= async (req,res) => {
    res.sendFile (__dirname + '/index.html')
}
module.exports.showData = async (req,res) => {
    let newMessage = new modelSchema ({
        name:req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + '/answer.html')
}



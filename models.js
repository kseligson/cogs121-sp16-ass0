var Mongoose = require('mongoose');

var MessageSchema = new Mongoose.Schema({
	"email": String,
	"content": String,
	"created": Date,
	"modified": Date
});

exports.Message = Mongoose.model('Message', MessageSchema)
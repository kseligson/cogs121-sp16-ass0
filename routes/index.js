var models = require('../models');

exports.view = function(req, res) {
    models.Message
    	.find()
    	.sort('date')
    	.exec(displayMessages);

    function displayMessages(err, msgs) {
    	if(err) {
    		console.log(err);
    		res.send(500);
    	}
        console.log(msgs);
    	res.render("index", {'messages': msgs});
    };
}
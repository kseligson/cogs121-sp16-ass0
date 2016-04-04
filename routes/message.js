var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    var newMessage = new models.Message({
    	"email": req.body.email,
    	"content": req.body.content,
    	"created": new Date(),
        "modified": new Date()
    });
    newMessage.save(afterSaving);

    function afterSaving(err) {
    	if(err) {
    		console.log(err);
    		res.send(500);
    	}
    	res.redirect('/'); //Redirect to home
    };
};

exports.delete = function(req, res) {
    console.log("In delete!");
    console.log(req.params.id);
    var messageID = req.params.id;
    models.Message
        .find({"_id": messageID})
        .remove()
        .exec(afterRemoving);

    function afterRemoving(err) {
        if(err) {
            console.log(err);
            res.send(500);
        }
        res.send("Message deleted!");
        //res.redirect('/'); //Redirect to home
    }
}

exports.update = function(req, res) {
    console.log("In update!");
    console.log(req.body);
    var messageID = req.params.id;
    models.Message
        .find({"_id": messageID})
        .update({"email": req.body.email})
        .update({"content": req.body.content})
        .update({"modified": new Date()})
        .exec(afterUpdate);

    function afterUpdate(err) {
        if(err) {
            console.log(err);
            res.send(500);
        }
        res.redirect('/');
    }
}
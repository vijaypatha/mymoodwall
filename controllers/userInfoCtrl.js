var User = require('../models/user.model.js');

module.exports= {

    read: function(req,res) {
      console.log(req.params);
      console.log(req.params.id);
      User.findById(req.params.id)
      .exec(function(err, result) {
        console.log(err, result);
        if (err) return res.status(500).send(err);
        res.send(result);
      });
    },//get product ID


}//exports

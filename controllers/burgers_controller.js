
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/eat-da-burer", function(req, res) {
    burger.create("burger_name", req.body.name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/eaten/:id", function(req,res){
  var condition = "id = " + req.params.id;
 
  burger.update({
    devoured: req.body.devoured
  },
  condition,
  function(result){
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  }
)
})



// Export routes for server.js to use.
module.exports = router;

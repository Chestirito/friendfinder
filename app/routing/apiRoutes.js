
var friendsData = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
    var leastDif = 99;
    var indexOfLeast;
    for(var i = 0; i < friendsData.length; i++){
     
      var diff = 0;
      for(var t = 0; t < newFriend.scores.length; t++){
        diff += Math.abs(parseInt(friendsData[i].scores[t]) - parseInt(newFriend.scores[t]));
      }
      if(leastDif > diff){
        leastDif = diff;
        indexOfLeast = i;
      }
    }
    res.json(friendsData[indexOfLeast]);
    
  });
};

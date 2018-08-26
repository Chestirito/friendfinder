
var friendsData = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    console.log(res.json(friendsData));
  });


  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
    var leastDif = 99;
    var indexOfLeast;
    var diff = 0;
    for(var i = 0; i < friendsData.length; i++){
      var dbScore = 0;
      var currScore = 0;
      for(var t = 0; t < newFriend.scores.length; t++){
        currScore += parseInt(newFriend.scores[t]);
        //console.log(newFriend.scores[t]);
        dbScore += parseInt(friendsData[i].scores[t]);
      }
      //console.log("currentscore: " + currScore);
      //console.log("dbscore: " + dbScore);
      diff = Math.abs(dbScore - currScore);
      //console.log("diff: "+diff);
      //console.log("least diff: " + leastDif);
      if(leastDif > diff){
        leastDif = diff;
        indexOfLeast = i;
        //console.log("leastdif:" + leastDif);
      }
    }
    //friendsData.push(req.body);
    //console.log(friendsData[indexOfLeast]);
    res.json(friendsData[indexOfLeast]);
    
  });/*
  app.post("/api/clear", function(req, res) {
    friendsData.length = [];

    res.json({ ok: true });
  });*/
};

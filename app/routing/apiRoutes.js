// grabbing from the object array in friends.js
var friendData = require("../data/friends.js");

// exporting the API routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendData);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friendData.push(newFriend);
        res.json(newFriend);
    });
};
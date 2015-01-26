Tracker.autorun(function(){
  var userID = Math.floor((Math.random() * 100000000) + 1);

  var user = {
    name: Math.floor((Math.random() * 100000000) + 1),
    email: Math.floor((Math.random() * 100000000) + 1)
  };

  _gs('identify', userID, user);
});
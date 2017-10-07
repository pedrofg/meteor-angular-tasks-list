import { Meteor } from 'meteor/meteor';

//Allow client to use all users.
Meteor.publish('userList', function () {
  console.log("All users requested");
  return Meteor.users.find({});
});

//On Login meteor callback. Set timeout to execute the function in the future (10 seconds).
Accounts.onLogin(function(user){
  console.log("User logged in: " + user.user._id);

  // Meteor.setTimeout(function () {
  //   console.log("User Login expired: " + user.user._id);
  //
  //    //Update database deleting the user session token
  //    Meteor.users.update(user.user._id, {
  //      $set: {
  //        "services.resume.loginTokens" : [] }
  //      });
  // }, 10000);

});

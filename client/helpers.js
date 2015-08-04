Template.messages.helpers({
  messages: Messages.find({})
});

Template.registerHelper('currentChannel', function () {
	return Session.get('channel');
});

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper("emailFromId", function (userId) {
  console.log("emailFromId " + userId);
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  }
  return user.emails[0].address;
});

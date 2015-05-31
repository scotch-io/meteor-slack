Meteor.publish('messages', function (channel) {
	return Messages.find({channel: channel});
});

Meteor.publish('channels', function () {
	return Channels.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
  	"username": 1,
  	"services.github.username": 1
  }});
});
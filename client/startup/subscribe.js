Meteor.startup(function() {
  Session.set('channel', 'general');
});

Meteor.subscribe('channels');
Meteor.subscribe('allUsernames');
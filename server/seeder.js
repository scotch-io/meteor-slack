Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "scotchio",
    email: "scotch@example.com",
    password: "dummypassword"
  });

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now()
  });

  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }
});
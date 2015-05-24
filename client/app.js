Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
})
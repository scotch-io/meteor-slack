Router.configure({
  layoutTemplate: 'app'
});

Router.route('/:channel', function () {
	this.render('messages');
});

Router.route('/', function () {
	this.redirect('/general');
});
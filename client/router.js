Router.configure({
  layoutTemplate: 'container'
});

Router.route('/user', function() {
  this.render('android'); // 'operator' or 'user'
  
});

Router.route('/operator', function() {
  this.render('operator'); // 'operator' or 'user'
});

Router.route('/', function() {
  this.redirect('/user');
});

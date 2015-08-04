Router.configure({
  layoutTemplate: 'app'
});

Router.route('/:client', function() {
  this.render(this.params.client); // 'operator' or 'user'
});

Router.route('/', function() {
  this.redirect('/user');
});

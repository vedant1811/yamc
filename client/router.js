Router.route('/:route', function() {
    if (Meteor.user() || this.params.route == 'log_in')
        this.render(this.params.route); // 'operator' or 'user' or 'log_in'
    else
        this.redirect('/log_in');
});

Router.route('/', function() {
    if (Meteor.user())
        this.redirect('/user');
    else
        this.redirect('/log_in');
});

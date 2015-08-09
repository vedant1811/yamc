Router.route('/:route', function() {
    if (Meteor.user() || this.params.route == 'log_in')
        this.render(this.params.route); // 'operator' or 'user' or 'log_in'
    else
        this.redirect('/log_in');
});

Router.route('/', function() {
    var user = Meteor.user();
    if (!user)
        this.redirect('/log_in');
    else if (user.profile && user.profile.isOperator)
        this.redirect('/operator');
    else
        this.redirect('/user');
});

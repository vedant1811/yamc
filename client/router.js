Router.route('/log_in', function() {
    this.render('log_in');
});

Router.route('/user/:conversationId', function() {
    if (!Meteor.user())
        this.redirect('/log_in');
    
    this.render('user');
});

Router.route('/operator/:conversationId', function() {
    if (!Meteor.user())
        this.redirect('/log_in');
    
    this.render('operator');
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

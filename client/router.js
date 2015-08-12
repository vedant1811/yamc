Router.route('/login', function() {
    this.render('login');
});

Router.route('/user/:conversationId', function() {
    if (!Meteor.user())
        this.redirect('/login');
    
    this.render('user');
});

Router.route('/operator/:conversationId', function() {
    if (!Meteor.user())
        this.redirect('/login');
    
    this.render('operator');
});

Router.route('/', function() {
    var user = Meteor.user();
    if (!user)
        this.redirect('/login');
    else if (user.profile && user.profile.isOperator)
        this.redirect('/operator');
    else
        this.redirect('/user');
});

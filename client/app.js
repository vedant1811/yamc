Accounts.onLogin(function() {
    Log('Accounts.onLogin');
    Meteor.call('getActiveConversationId', Meteor.userId(), function(err, result) {
        if (!err) {
            Session.setAuth('conversationId', result);
            Log('setting conversationId to ' + result);
            Meteor.call(Router.go('/user'));
        } else {
            Log(err);
        }
    });
});

Accounts.onLogin(function() {
    Log('Accounts.onLogin');
    Meteor.call('getActiveConversationId', Meteor.userId(), function(err, result) {
        if (!err) {
            Session.setAuth('conversationId', result);
            Log('setting conversationId to ' + result);
            if (Meteor.user().profile.isOperator)
                Router.go('/operator');
            else
                Router.go('/user');
        } else {
            Log(err);
        }
    });
});

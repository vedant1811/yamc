Accounts.onLogin(function() {
    Log('Accounts.onLogin');
    Meteor.call('getActiveConversationId', Meteor.userId(), function(err, result) {
        if (!err) {
            Log('going to conversationId ' + result);
            if (Meteor.user().profile && Meteor.user().profile.isOperator)
                Router.go('/operator/' + result);
            else
                Router.go('/user/' + result);
        } else {
            Log(err);
        }
    });
});

getCurrentConversationId = function() {
    var id = Router.current().params.conversationId;
    if (id)
        return id;
    else
        throw new Error('conversationId is ' + id);
}

doFacebookLogin = function() {
    var permissions = [
        "public_profile",
        "user_interests",
        "user_activities",
        "user_photos",
        "read_friendlists",
        "user_friends",
        "email"
    ];
    
    if (Meteor.isCordova) {
        Log('facebookConnectPlugin.login');
        facebookConnectPlugin.login(permissions, function(success) { // on success
            Log(success.authResponse);
        },
            function(error) { // on failure
            Log(error);
        });
    } else {
        Meteor.loginWithFacebook({
            requestPermissions: permissions
        },
            function(error) {
            Log(error);
        });
    }
}
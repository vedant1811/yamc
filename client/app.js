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
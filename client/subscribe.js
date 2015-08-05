Accounts.onLogin(function() {
    Log('Accounts.onLogin');
    Meteor.call('getActiveConversationId', Meteor.userId(), function(err, result) {
        if (!err) {
            Session.set('conversationId', result);
            Log('setting conversationId to ' + result);
        } else
            Log(err);
    });
});

Template.messages.onCreated(function() {
    var self = this;
    self.autorun(function() {
        Log('subscribing to ' + Session.get('channel'));
        self.subscribe('messages', Session.get('channel'));
    });
});
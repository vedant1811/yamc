Template.messages.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var conversationId = Session.get('conversationId');
        if (conversationId) {
            Log('subscribing to ' + conversationId);
            self.subscribe('messages', conversationId);
       }
    });
});

Template.conversations.onCreated(function() {
    var self = this;
    self.autorun(function() {
        Log('subscribing to conversations');
        self.subscribe('conversations');
    });
});

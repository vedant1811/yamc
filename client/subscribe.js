Template.messages.onCreated(function() {
    var self = this;
    self.autorun(function() {
        Log('subscribing to ' + Session.get('conversationId'));
        self.subscribe('messages', Session.get('conversationId'));
    });
});
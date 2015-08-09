Meteor.publish('messages', function (conversationId) {
    if (!conversationId)
        throw new Error('conversationId undefined');
    return Messages.find({conversationId: conversationId});
});

Meteor.publish('conversations', function() {
    if (!isOperator(this.userId))
        throw new Error('user is not an operator');
    return Conversations.find({});
});
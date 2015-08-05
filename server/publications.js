Meteor.publish('messages', function (conversationId) {
    if (!conversationId)
        throw new Error('conversationId undefined');
    return Messages.find({conversationId: conversationId});
});
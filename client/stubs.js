Meteor.methods({
    newMessage: function (body, conversationId) {
        var message = new Object();
        message.timestamp = Date.now();
        message.body = body;
        Messages.insert(message);
    }
})
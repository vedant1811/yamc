Meteor.methods({
    newMessage: function (body, channelId) {
        var message = new Object();
        message.timestamp = Date.now();
        message.body = body;
        Messages.insert(message);
    }
})
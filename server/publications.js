Meteor.publish('messages', function (channelId) {
    if (!channelId)
        throw new Error('channelId undefined');
    return Messages.find({channelId: channelId});
});
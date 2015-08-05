Meteor.methods({
    newMessage: function (body, conversationId) {
        // assset Meteor.userId() is a user
        var message = {
            timeStamp: Date.now(),
            from: Meteor.userId(),
            conversationId: conversationId,
            body: body
        };
        Messages.insert(message);
    },
    
   getActiveConversationId: function (userId) {
       // TODO: add logic
       var conversation = Conversations.findOne({userId: userId});
       if (conversation) {
           return conversation._id;
       } else {
           conversation = {
               userId: userId,
               operatorId: 'default',
               isActive: true,
               createdAt: Date.now()
           };
           return Conversations.insert(conversation); // returns the unique _id
       }
   }
});
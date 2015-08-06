Meteor.methods({
    newMessage: function (body, conversationId) {
        // TODO: assset Meteor.userId() is a user and conversationId is the correct one
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
               operatorId: getFreeOperator()._id,
               isActive: true,
               createdAt: Date.now()
           };
           return Conversations.insert(conversation); // returns the unique _id
       }
   }
});
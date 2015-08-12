ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      clientId: "470431293120792",
      loginStyle: "popup",
      secret: "82a2be2294b74ccdcd94d5c104ded937"
    }
  }
);

getFreeOperator = function() {
    // TODO: add more logic to it
    return Meteor.users.findOne({'profile.isOperator': true});
}

// TODO: add logic. check isActive.
getConversationForOperator = function(operator) {
    if (!operator.profile && !operator.profile.isOperator)
        throw new Error('param operator is not an operator');
    
    return Conversations.findOne({operatorId: operator._id});
}

isOperator = function(userId) {
    if (userId) {
        user = Meteor.users.findOne(userId)
        if (user && user.profile && user.profile.isOperator)
            return true;
    }
    return false;
}
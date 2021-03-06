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
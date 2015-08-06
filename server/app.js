getFreeOperator = function() {
    // TODO: add more logic to it
    return Meteor.users.findOne({'profile.isOperator': true});
}
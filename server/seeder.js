Meteor.startup(function() {

    if (Meteor.users.find().count() == 0) {
        Accounts.createUser({
            email: "vedant@gmail.com",
            password: "hello123"
        });

        // operator
        Accounts.createUser({
            email: "operator@gmail.com",
            password: "hello123",
            profile: {
                isOperator: true
            }
        });
    }
});

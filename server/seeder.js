Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    email: "vedant@gmail.com",
    password: "hello123"
  });

  // operator
  Accounts.createUser({
    email: "operator@gmail.com",
    password: "hello123"
  });
});

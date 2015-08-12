Template.footer.events({
    'keypress input': function(e) {
        var inputVal = $('.android-input-box_text').val();
        if(!!inputVal) {
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode == 13) {
                e.stopPropagation();
                sendMessage();
                return false;
            }    
        }
    },
    'click .button': function(e) {
        sendMessage();
    }
});

Template.conversation.events({
    'click .button': function(e) {
        var conversationId = e.target.textContent;
        Log('conversationClicked ' + conversationId);
        Router.go('/operator/' + conversationId);
    }
});

Template.login.events({
    'click .button': function(e) {
        Log('doFacebookLogin');
        var permissions = [
            "public_profile",
            "user_interests",
            "user_activities",
            "user_photos",
            "read_friendlists",
            "user_friends",
            "email"
        ];

        if (Meteor.isCordova) {
            Log('facebookConnectPlugin.login');
            facebookConnectPlugin.login(permissions, function(success) { // on success
                Log(success.authResponse);
            },
                function(error) { // on failure
                Log(error);
            });
        } else {
            Meteor.loginWithFacebook({
                requestPermissions: permissions
            },
                function(error) {
                Log(error);
            });
        }
    }
});

function sendMessage() {
    Meteor.call('newMessage', $('.android-input-box_text').val(), getCurrentConversationId());
    $('.android-input-box_text').val("");
}

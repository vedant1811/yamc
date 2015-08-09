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
    }
});

function sendMessage() {
    Meteor.call('newMessage', $('.android-input-box_text').val(), Session.get('conversationId'));
    $('.android-input-box_text').val("");
}

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
  }
});

function sendMessage() {
    Meteor.call('newMessage', {
      text: $('.android-input-box_text').val(),
      channel: Session.get('channel')
    });
    $('.android-input-box_text').val("");
}
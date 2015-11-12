
// error types
var alert = ['alert'];
var success = ['success'];
var general = ['general'];

// display
function Notification(type, message){
    if (activemodal === true) {
        $('.modal-content').before(NotificationPartial(type[0], message));
    } else {
        $('main').before(NotificationPartial(type[0], message));
    }
}

// Close
$('html').on('click', '.notification .close', function(){
    $(this).parent().remove();
});

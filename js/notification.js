
// error types
var alert = ['alert'];
var success = ['success'];
var general = ['general'];

// display
function Notification(type, message){
    $('main').before(NotificationPartial(type[0], message));
}

// Close
$('html').on('click', '.notification .close', function(){
    $(this).parent().remove();
});

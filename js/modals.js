// Helpers
function Blur(status){
    if (status === true) {
        $('.app-wrapper').addClass('blur');
    } else {
        $('.app-wrapper').removeClass('blur');
    }
}

function OpenModal() {
    Blur(true);
    $('.modal').removeClass('hidden');
}

function CloseModal() {
    Blur(false);
    $('.modal').addClass('hidden');
    $('.modal .modal-content').html("");
}


// Events
$('html').on('click', '.modal', function(e) {
    if(e.target == this){
        CloseModal();
    }
});


// Modal Routes
//Songs
$('html').on('click', '.songs-footer-content a', function(){
    OpenModal();
    RenderSongModal();
});

//Polls
$('html').on('click', '.polls-footer-content a', function(){
    OpenModal();
    RenderPollsModal();
});

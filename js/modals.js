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
$('html').on('click', '.modal', function() {
    CloseModal();
});


// Modal Routes
$('html').on('click', '.song-footer-content a', function(){
    OpenModal();
    RenderSongModal();
});

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
// Close Modal
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
//Generate
$('html').on('click', '.polls-footer-content a', function(){
    OpenModal();
    RenderPollsModal();
});

// Create New
$('html').on('click', '.poll-single-modal button', function(){
    song1 = parseInt($('.song1 select').val());
    song2 = parseInt($('.song2 select').val());
    song3 = parseInt($('.song3 select').val());
    color1 = parseInt($('.song1 .colorpicker').attr('data-id'));
    color2 = parseInt($('.song2 .colorpicker').attr('data-id'));
    color3 = parseInt($('.song3 .colorpicker').attr('data-id'));

    //validation
    if (isNaN(song1) || isNaN(song2) || isNaN(song3)) {
        alert('Error');
    } else {
        AddPoll([song1, song2, song3], [color1, color2, color3]);
        CloseModal();
        RenderPolls();
    }
});

// Color Picker
// open
$('html').on('click', '.poll-single-modal .colorpicker', function(e){
    if(e.target == this){
        $('.colorpicker .selector').addClass('hidden');
        $(this).children('.selector').removeClass('hidden');
    }
    return false;
});

// close
$('html').on('click', '.close', function(){
    $(this).parent().parent().addClass('hidden');
});

// color picked
$('html').on('click', '.colorpicker .color-wrapper div', function(){
    $(this).parent().parent().addClass('hidden');
    id = parseInt($(this).attr('data-id'));
    $(this).parent().parent().parent().attr('data-id', id);
    $(this).parent().parent().parent().css('background-color', SongColor(id));
});


















// spacer

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
    activemodal = true;
}

function CloseModal() {
    Blur(false);
    $('.modal').addClass('hidden');
    $('.modal .modal-content').html("");
    activemodal = false;
}


// Events
// Close Modal
$('html').on('click', '.modal', function(e) {
    if(e.target == this){
        CloseModal();
    }
});


// Modal Routes
// Create Song
$('html').on('click', '.songs-footer-content a', function(){
    OpenModal();
    RenderSongModal();
    DragDropFile();

    function DragDropFile(){
        var holder = document.getElementById('upload-field');
        holder.ondragover = function () {
            $('.upload-field').addClass('dragged');
            return false;
        };
        holder.ondragleave = holder.ondragend = function () {
            $('.upload-field').removeClass('dragged');
            return false;
        };
        holder.ondrop = function (e) {
            e.preventDefault();
            var file = e.dataTransfer.files[0];
            console.log('File you dragged here is', file.path);
            RenderSongInfo(file.path);
            return false;
        };
    }
});

$('html').on('click', '.song-modal button', function(){
    name = $('#name').val();
    artist = $('#artist').val();
    hashtag = $('#hashtag').val();
    filepath = $('#file').val();
    console.log(filepath);

    //validation
    if (name === "" || artist === "" || hashtag === "") {
        alert('Error');
    } else {
        AddSong(filepath, name, artist, hashtag);
        CloseModal();
        RenderSongs();
    }
});

// update song
$('html').on('click', '.songs .song .song_info i', function(){
    id = parseInt($(this).attr('data-id'));

    OpenModal();
    RenderUpdateSongsInfo(id);
});

$('html').on('click', '.update-song-modal button', function(){
    id = $(this).attr('data-id');
    name = $('#name').val();
    artist = $('#artist').val();
    hashtag = $('#hashtag').val();
    filepath = $('#file').val();
    console.log(filepath);

    //validation
    if (name === "" || artist === "" || hashtag === "") {
        alert('Error');
    } else {
        UpdateSong(id, filepath, name, artist, hashtag);
        CloseModal();
        RenderSongs();
    }
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
        Notification(alert, "Missing some songs there!");
    } else if (color1 === -1 || color2 === -1 || color3 === -1) {
            Notification(alert, "Don't forgot the colors!");
    } else {
        console.log(color1);
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

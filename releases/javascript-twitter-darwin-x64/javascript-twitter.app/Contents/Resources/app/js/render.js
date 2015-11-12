function RenderHead() {
    $(function() {
        $('head').html(HeadPartial());
    });
}

function SetSidebar(selector) {
    $('.sidebar a').removeClass('active');
    $('.sidebar a .pointer').addClass('hidden');
    $('.sidebar .' + selector + " .pointer").removeClass('hidden');
    $('.sidebar .' + selector).addClass('active');
}


//Songs
function RenderSongs(){
    $(function() {
        //sidebar
        SetSidebar('songs-link');

        //main
        $('main').remove();
        $('.marker').after(SongPartial());
        SongSorting();

        //footer
        $('footer').html("");
        $('footer').html(SongsFooterPartial());
    });
}

function RenderSongModal() {
    $('.modal').html("");
    $('.modal').html(SongsUploadPartial());
}

function RenderSongInfo(filepath){
    $('.modal').html("");
    $('.modal').html(SongsInfoPartial(filepath));
}


// Polls
function RenderPolls() {
    //sidebar
    SetSidebar('polls-link');

    //main
    $('main').remove();
    $('.marker').after(PollsPartial());
    PollSorting();

    //footer
    $('footer').html("");
    $('footer').html(PollsFooterPartial());
}

function RenderPollsModal() {
    $('.modal').html("");
    $('.modal').html(PollsModalPartial());
}


// Play
function RenderPlay() {
    //sidebar
    SetSidebar('play-link');

    //main
    $('main').remove();

    //footer
    $('footer').html("");
}

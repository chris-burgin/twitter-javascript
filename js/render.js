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
        $('footer').html(SongFooterPartial());
    });
}

function RenderSongModal() {
    SongsUploadPartial();
}

function RenderPolls() {
    //sidebar
    SetSidebar('polls-link');

    //main
    $('main').remove();
    $('.marker').after(PollPartial());
    PollSorting();

    //footer
    $('footer').html("");
}

function RenderPlay() {
    //sidebar
    SetSidebar('play-link');

    //main
    $('main').remove();

    //footer
    $('footer').html("");
}

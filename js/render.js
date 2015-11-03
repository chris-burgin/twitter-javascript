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
        SetSidebar('songs-link');
        $('main').remove();
        $('.marker').after(SongPartial());
        SongSorting();
    });
}

function RenderPolls() {
    SetSidebar('polls-link');
    $('main').remove();
    $('.marker').after(PollPartial());
}

function RenderPlay() {
    SetSidebar('play-link');
    $('main').remove();
}

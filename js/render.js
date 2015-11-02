function RenderHead() {
    $(function() {
        $('head').html(GenerateHead());
    });
}

function RenderSidebar(selector){
    $(function() {
        $('.sidebar').html(GenerateSidebar());
        $('.sidebar .' + selector).addClass('active');
    });
}

function RenderSongs(){
    $(function() {
        $('main').remove();
        $('.marker').after(GenerateSongs(songs));
        SongSorting();
    });

}

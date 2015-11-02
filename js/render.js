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

function RenderSongs(songs){
    $(function() {
        $('main').remove();
        $('.marker').after(GenerateSongs(songs));
        ResetSorting();
    });

}

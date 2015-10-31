// Get Jquery Working
try {
    $ = jQuery = module.exports;
} catch(e) {}

/* Renders */
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
        $('main').remove()
        $('.marker').after(GenerateSongs());
        $('.sidebar .' + selector).addClass('active');
    });
}


// Initial Rendering (application start)
RenderHead();
RenderSidebar('songs-link');
RenderSongs();

// Get Jquery Working
try {
    $ = jQuery = module.exports;
} catch(e) {}

/* Partials */
function head() {
    $(function() {
        $.get('../templates/partials/head.html', function(data){
            $('head').append(data);
        });
    });
}

function sidebar(selector){
    $(function() {
        $.get('../templates/partials/sidebar.html', function(data){
            $('.sidebar').append(data);
            $('.sidebar .' + selector).addClass('active');
        });
    });
}

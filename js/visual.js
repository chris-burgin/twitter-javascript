// song sorting
function SongSorting() {
    // init
    $('.sortable').sortable({
        placeholder: '<li class="song-placehold"></li>'
    });

    // sort stop
    $('.sortable').sortable().bind('sortstop', function(e, ui) {
        // place item
        $('.sortable-placeholder').after(ui.item[0]);
    });

    // dom position changed
    $('.sortable').sortable().bind('sortupdate', function(e, ui) {
        // update database order
        var order = [];
        $('.songs .song').each(function( index ) {
            // push id to list
            order.push(
                // fetch and parse id
                parseInt($(this).attr('id'))
            );
        });;
        SortSongs(order);
    });

    // sorting
    function SortSongs(sort) {
        object = [];
        for (var i in sort) {
            for (var s in songs ) {
                if (songs[s].id === sort[i]){
                    object = Concat(object, songs[s]);
                    break;
                }
            }
        }
        UpdateSongs(object);
    }
}

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
        });
        SortSongs(order);
    });

    // sorting
    function SortSongs(sort) {
        object = [];
        for (var i in sort) {
            for (var s in songs ) {
                if (songs[s].id === sort[i]){
                    object.push(songs[s]);
                    break;
                }
            }
        }
        UpdateSongs(object);
    }
}

function PollSorting() {
    // init
    $('.pollsortable').sortable({
        placeholder: '<li class="poll-placehold"></li>'
    });

    // sort stop
    $('.sortable').sortable().bind('sortstop', function(e, ui) {
        // place item
        $('.sortable-placeholder').after(ui.item[0]);
    });

    // dom position changed
    $('.pollsortable').sortable().bind('sortupdate', function(e, ui) {
        // update database order
        var order = [];
        $('.polls .poll').each(function( index ) {
            // push id to list
            order.push(
                // fetch and parse id
                parseInt($(this).attr('id'))
            );
        });
        SortPolls(order);
    });

    // sorting
    function SortPolls(sort) {
        object = [];
        for (var i in sort) {
            for (var p in polls ) {
                if (polls[p].id === sort[i]){
                    object.push(polls[p]);
                    break;
                }
            }
        }
        UpdatePolls(object);
    }
}

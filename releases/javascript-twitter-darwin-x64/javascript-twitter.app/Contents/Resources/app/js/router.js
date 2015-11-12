// Helpers
function IsActive(selector){
    if ($('.sidebar .active').hasClass(selector)) {
        return true;
    } else {
        return false;
    }
}

// Main Routes
$('.sidebar').on('click', '.songs-link', function() {
    if (!IsActive('songs-link')) {
        RenderSongs(songs);
    }
});

$('.sidebar').on('click', '.polls-link', function() {
    if (!IsActive('polls-link')) {
        RenderPolls();
    }
});

$('.sidebar').on('click', '.play-link', function() {
    if (!IsActive('play-link')) {
        RenderPlay();
    }
});

// Global Variables
var songs = FetchSongs();
var polls = FetchPolls();
var colors = FetchColors();

// Initial Rendering
RenderHead();
SetSidebar('songs-link');
RenderSongs();

// Global Variables
var songs = FetchSongs();
var polls = FetchPolls();

// Initial Rendering
RenderHead();
SetSidebar('songs-link');
RenderSongs();

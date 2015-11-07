// Global Objects
var songs = FetchSongs();
var polls = FetchPolls();
var colors = FetchColors();

// Global Variables
var activemodal = false;

// Initial Rendering
RenderHead();
SetSidebar('songs-link');
RenderSongs();

// Prevent Dragging Of Files
$(function() {
    window.addEventListener("dragover",function(e){
      e = e || event;
      e.preventDefault();
    },false);
    window.addEventListener("drop",function(e){
      e = e || event;
      e.preventDefault();
    },false);
});

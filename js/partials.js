/*jshint multistr: true */

function HeadPartial() {
    var data = ("<!-- Fonts -->\
                <link href='../fonts/SourceSansPro-Bold.ttf' ref='stylesheet'>\
                <link href='../fonts/SourceSansPro-ExtraLight.ttf' ref='stylesheet'>\
                <link href='../fonts/SourceSansPro-Light.ttf' ref='stylesheet'>\
                <link href='../fonts/SourceSansPro-Regular.ttf' ref='stylesheet'>]\
                <link href='../fonts/SourceSansPro-Semibold.ttf' ref='stylesheet'>\
                <link href='../css/fontAwesome.css' rel='stylesheet'>\
                <!-- CSS -->\
                <link href='../css/style.css' rel='stylesheet'>\
                <!-- JS -->");
    return data;
}

// Songs
function SongPartial(){
    var data = "<main class='songs'><ul class='sortable'>";
    for(var i in songs) {
        song = songs[i];
        data += GenerateSong(song.id, song.name, song.artist);
    }
    data += "</ul></main>";
    return data;

    function GenerateSong(id, name, artist){
        var data = (" <li class='song center-left p1' id=" + id + ">\
                          <div class='hamburger'>\
                              <hr><hr><hr>\
                          </div>\
                          <div class='song_info'>\
                              <span> " + name + " <em> - " + artist + " </em></span>\
                          </div>\
                      </li> ");
        return data;
    }
}

function SongsFooterPartial(){
    var data = "<div class='songs-footer-content center-right'>\
                    <a href='#'><i class='fa fa-plus'></i></a>\
                </div>";
    return data;
}

function SongsUploadPartial() {
    var data = "<div class='modal-content song-modal center'>\
                    <h2 class='center'> Pick Your Song! </h2>\
                    <div class='upload-field center'>\
                        <i class='fa fa-file'></i>\
                        <span> Drag Song Here </span>\
                    </div>\
                </div>";
    return data;
}


// Polls
function PollsPartial() {
    var data = "<main><ul class='polls pollsortable'>";
    for(var i in polls) {
        poll = polls[i];
        data += GeneratePoll(poll.id, poll.songs);
    }
    data +=  "</ul></main>";
    return data;

    function GeneratePoll(id, songs) {
        var data = "<li class='poll' id=" + id + ">\
            <div class='dragger center'>\
                <div class='hamburger'>\
                    <hr><hr><hr>\
                </div>\
            </div>\
            <ul>";
            for(var i in songs){
                data += "<li class='song' data-id=" + songs[i] + " style='background-color:" + SongColor(songs[i]) + ";'> " + SongString(songs[i])  + "</li>";
            }
            data += "</ul></li>";
        return data;
    }
}

function PollsFooterPartial(){
    var data = "<div class='polls-footer-content center-right'>\
                    <a href='#'><i class='fa fa-plus'></i></a>\
                </div>";
    return data;
}

function PollsModalPartial() {
    var songshtml = "";
    for (var i in songs) {
        songshtml += "<option value='" + songs[i].id + "'>" + songs[i].name +" - " + songs[i].artist + "</option>";
    }

    var data = "<div class='modal-content poll-single-modal center'>\
                    <h2 class='center'> Pick Those Tunes! </h2>\
                    <div class='pick-songs'>\
                        <span> Song 1 </span>\
                        <select id='song1'>\
                            <option value='' disabled='disabled' selected='selected'>Please Select A Song!</option>\
                            " + songshtml + "\
                            </select>\
                        <span> Song 2 </span>\
                        <select id='song2'>\
                            <option value='' disabled='disabled' selected='selected'>Please Select A Song!</option>\
                            " + songshtml + "\
                        </select>\
                        <span center-left> Song 3 </span>\
                        <select id='song3'>\
                            <option value='' disabled='disabled' selected='selected'>Please Select A Song!</option>\
                            " + songshtml + "\
                        </select>\
                        <button> Songs Picked! </button>\
                    </div>\
                </div>";
    return data;
}

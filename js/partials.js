/*jshint multistr: true */
// Other
function HeadPartial() {
    var data = "<!-- Fonts -->\
                <link href='../fonts/SourceSansPro-Bold.ttf' ref='stylesheet'>\
                <link href='../fonts/SourceSansPro-ExtraLight.ttf' ref='stylesheet'>\
                <link href='../fonts/SourceSansPro-Light.ttf' ref='stylesheet'>\
                <link href='../fonts/SourceSansPro-Regular.ttf' ref='stylesheet'>]\
                <link href='../fonts/SourceSansPro-Semibold.ttf' ref='stylesheet'>\
                <link href='../css/fontAwesome.css' rel='stylesheet'>\
                <!-- CSS -->\
                <link href='../css/style.css' rel='stylesheet'>\
                <!-- JS -->";
    return data;
}

function NotificationPartial(type, message) {
    var data = "<div class='notification " + type + "'><div class='close center-right'><a href='#'><i class='fa fa-times'></i></a></div><span>" + message + "</span></div>";
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

function SongsUploadPartial() {
    var data = "<div class='modal-content song-modal center'>\
                    <h2 class='center'> Pick Your Song! </h2>\
                    <div class='upload-field center' id='upload-field'>\
                        <i class='fa fa-file'></i>\
                        <span> Drag Song Here </span>\
                    </div>\
                </div>";
    return data;
}

function SongsInfoPartial(filepath) {
    var data = "<div class='modal-content song-modal center'>\
                    <h2> Tell Us More! </h2>\
                    <div class='content-wrapper'>\
                        <input id='file' value='" + filepath + "' class='hidden'>\
                        <span> Song Name </span>\
                        <input id='name' value=" + 'songname' + ">\
                        <span> Artist </span>\
                        <input id='artist' value=" + 'artist' + ">\
                        <span> Hashtag </span>\
                        <input id='hashtag' value=" + '#hashtag' + ">\
                        <button> Finish Up! </button>\
                    </div>\
                </div>";
    return data;
}

function SongsFooterPartial(){
    var data = "<div class='songs-footer-content center-right'>\
                    <a href='#'><i class='fa fa-plus'></i></a>\
                </div>";
    return data;
}

// Polls
function PollsPartial() {
    var data = "<main><ul class='polls pollsortable'>";
    for(var i in polls) {
        poll = polls[i];
        data += GeneratePoll(poll.id, poll.songs, poll.colors);
    }
    data +=  "</ul></main>";
    return data;

    function GeneratePoll(id, songs, colors) {
        var data = "<li class='poll' id=" + id + ">\
            <div class='dragger center'>\
                <div class='hamburger'>\
                    <hr><hr><hr>\
                </div>\
            </div>\
            <ul>";
            for(var i in songs){
                data += "<li class='song' data-id=" + songs[i] + " style='background-color:" + SongColor(colors[i]) + ";'> " + SongString(songs[i])  + "</li>";
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

    var colorpicker = "<div class='colorpicker' data-id='-1'>\
                        <div class='selector hidden'>\
                            <div class='close-wrapper'><a class='close' href='#'><i class='fa fa-times'></i></a></div> \
                            <div class='color-wrapper center'>\
                                <div style='background-color:" + SongColor(0) + ";' data-id='0'> </div>\
                                <div style='background-color:" + SongColor(1) + ";' data-id='1'> </div>\
                                <div style='background-color:" + SongColor(2) + ";' data-id='2'> </div>\
                                <div style='background-color:" + SongColor(3) + ";' data-id='3'> </div>\
                                <div style='background-color:" + SongColor(4) + ";' data-id='4'> </div>\
                                <div style='background-color:" + SongColor(5) + ";' data-id='5'> </div>\
                            </div>\
                        </div>\
                       </div>";

    var data = "<div class='modal-content poll-single-modal center'>\
                    <h2 class='center'> Pick Those Tunes! </h2>\
                    <div class='pick-songs'>\
                        <span> Song 1 </span>\
                        <div class='select-wrapper center song1'>\
                            <select>\
                                <option value='null' disabled='disabled' selected='selected'>Please Select A Song!</option>\
                                " + songshtml + "\
                            </select>\
                            " + colorpicker + "\
                        </div>\
                        <span> Song 2 </span>\
                        <div class='select-wrapper center song2'>\
                            <select>\
                                <option value='null' disabled='disabled' selected='selected'>Please Select A Song!</option>\
                                " + songshtml + "\
                            </select>\
                            " + colorpicker + "\
                        </div>\
                        <span center-left> Song 3 </span>\
                        <div class='select-wrapper center song3'>\
                            <select>\
                                <option value='null' disabled='disabled' selected='selected'>Please Select A Song!</option>\
                                " + songshtml + "\
                            </select>\
                            " + colorpicker + "\
                        </div>\
                        <button> Songs Picked! </button>\
                    </div>\
                </div>";
    return data;
}

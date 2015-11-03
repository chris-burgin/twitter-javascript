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

function PollPartial(){
    var data = "<main>\
        <ul class='polls'>\
            <li class='poll'>\
                <div class='dragger center'>\
                    <div class='hamburger'>\
                        <hr><hr><hr>\
                    </div>\
                </div>\
                <ul>\
                    <li class='song orange'> asdf</li>\
                    <li class='song purple'> asdf</li>\
                    <li class='song teal'> asdf</li>\
                </ul>\
            </li>\
        </ul>\
    </main>";
    return data;
}

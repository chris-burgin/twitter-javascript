/*jshint multistr: true */

function GenerateHead() {
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


function GenerateSidebar() {
    var data = (" <a class='songs-link center' href='#'>\
                      <i class='fa fa-volume-up'></i>\
                      <div class='pointer center-right'><div></div></div>\
                  </a>\
                  <a class='polls-link center' href='#'>\
                      <i class='fa fa-list'></i>\
                      <div class='pointer center-right hidden'><div></div></div>\
                  </a>\
                  <a class='play-link center' href='#'>\
                      <i class='fa fa-play'></i>\
                      <div class='pointer center-right hidden'><div></div></div>\
                  </a>");
    return data;
}

function GenerateSongs(){
    var data = ("<main class='songs'>\
                    <div class='song center-left'>\
                        <div class='hamburger'>\
                            <hr><hr><hr>\
                        </div>\
                        <div class='song_info'>\
                            <span> Down To The Felt <em> - Dave Mosion </em></span>\
                        </div>\
                    </div>\
                </main>")
    return data
}

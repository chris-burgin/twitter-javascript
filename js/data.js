var fs = require('fs');
function FetchSongs() {
    object = JSON.parse(fs.readFileSync('data/songs.json', 'utf8'));
    return object;
}

function UpdateSongs(object) {
    songs = object;
    string = JSON.stringify(object);
    fs.writeFile('data/songs.json',string,function(err) {});
}

function SortSongs(sort) {
    object = [];
    for (var i in sort) {
        for (var s in songs ) {
            console.log('hi');
            if (songs[s].id === sort[i]){
                object = object.concat(songs[s]);
                break;
            }
        }
    }
    UpdateSongs(object);
}

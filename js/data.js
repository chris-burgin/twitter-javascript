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

function NextID() {
    highest = 0;
    for (var i in songs) {
        if (songs[i].id > highest) {
            highest = songs[i].id;
        }
    }
    return highest + 1;
}

function AddSong(path, name, artist, hashtag) {
    object = [
                {
                'id': NextID(),
                'path': path,
                'name': name,
                'artist': artist,
                'hashtag': hashtag
                }
             ];
    object = Concat(songs, object);
}

function Concat(oldobject, newobject){
    object = oldobject.concat(newobject);
    return object;
}

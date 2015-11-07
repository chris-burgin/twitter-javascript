// Required
var fs = require('fs');

// Helpers
function Concat(oldobject, newobject){
    if ($.isEmptyObject(oldobject)) {
        return newobject;
    } else {
        object = oldobject.concat(newobject);
    }
    return object;
}
// Colors
function FetchColors() {
    object = JSON.parse(fs.readFileSync('data/colors.json', 'utf8'));
    return object;
}

function SongColor(id) {
    return colors.colors[id];
}

// Songs
function NextSongID() {
    highest = 0;
    for (var i in songs) {
        if (songs[i].id > highest) {
            highest = songs[i].id;
        }
    }
    return highest + 1;
}

function FetchSongs() {
    object = JSON.parse(fs.readFileSync('data/songs.json', 'utf8'));
    return object;
}

function SongString(id){
    for (var i in songs) {
        if (songs[i].id === id) {
            return songs[i].name + " - <em> " + songs[i].artist + "</em>";
        }
    }
}

function UpdateSongs(object) {
    songs = object;
    string = JSON.stringify(object);
    fs.writeFile('data/songs.json',string,function(err) {});
}

function AddSong(path, name, artist, hashtag) {
    object = [
                {
                'id': NextSongID(),
                'path': path,
                'name': name,
                'artist': artist,
                'hashtag': hashtag
                }
             ];
    object = Concat(songs, object);
    UpdateSongs(object);
}

// Polls
function NextPollID(){

}

function FetchPolls(){
    object = JSON.parse(fs.readFileSync('data/polls.json', 'utf8'));
    return object;
}

function UpdatePolls(object) {
    polls = object;
    string = JSON.stringify(object);
    fs.writeFile('data/polls.json',string,function(err) {});
}

function AddPoll(ids, colors) {
    object = [
                {
                'id': NextSongID(),
                'songs': ids,
                'colors': colors
                }
             ];
    object = Concat(polls, object);
    UpdatePolls(object);
}

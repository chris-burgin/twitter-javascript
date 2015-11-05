// Required
var fs = require('fs');

// Helpers
function Concat(oldobject, newobject){
    object = oldobject.concat(newobject);
    return object;
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

function SongColor(id) {
    for (var i in songs) {
        if (songs[i].id === id) {
            return songs[i].color;
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

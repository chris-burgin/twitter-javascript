var fs = require('fs');
function FetchSongs() {
    var object = JSON.parse(fs.readFileSync('data/songs.json', 'utf8'));
    return object;
}

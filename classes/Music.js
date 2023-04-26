const { Media } = require("./Media");

class Music extends Media {
    constructor(title, genre, year, artist, length){
        super(title, genre, year);
        this.artist = artist;
        this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum([]){
        return Math.max();
    }
}

module.exports = {
    Music
}
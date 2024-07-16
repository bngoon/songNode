class SongNode {
    constructor(song) {
        this .song = song; //song object containing details
        this.next = null; // Pointer to the next song node
    }
}

class Playlist {
    constructor(){
        this.head = null; // Head of playlist (first song node)
        this.next = 0; // Number of songs in the Playlist
    }
}
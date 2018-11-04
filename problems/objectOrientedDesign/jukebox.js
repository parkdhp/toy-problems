/**Jukebox
 * Design a musical jukebox using object-oriented principles.
 */

class Jukebox {
  constructor() {
    this.songs = [];
    this.currentSong = null;
  }
  shuffle() {
    this.songQueue.sort(() => Math.random() > 0.5 ? 1 : 0);
  }
  play() {
    if (!this.currentSong) {
      this.currentSong = this.songs.unshift();
      this.currentSong.play();
    } else {
      console.log('Already playing song')
    }
  }
  pause() {
    if (this.currentSong) {
      this.currentSong.pause();
    } else {
      console.log('No song in playlist');
    }
  }
  playNext() {
    this.currentSong = this.songs.unshift();
    this.currentSong.play();
  }
  add(song) {
    this.songs.push(song);
  }
  currentSongName() {
    return this.currentSong.name;
  }
  currentSongArtist() {
    return this.currentSong.artist;
  }
}

class Song {
  constructor(name, artist, trackFile) {
    this.name = name;
    this.artist = artist;
    this.track = new Audio(trackFile);
  }
  play() {
    this.track.play();
  }
  pause() {
    this.track.pause();
  }
}
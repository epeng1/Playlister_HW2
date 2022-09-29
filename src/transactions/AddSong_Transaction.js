import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that adds a song
 * from a playlist. It will be managed by the transaction stack.
 * 
 * @author ep1
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
    }

    doTransaction() {
        this.app.addSong(this.app.getPlaylistSize(), "Untitled", "Unknown", "dQw4w9WgXcQ");
    }
    
    undoTransaction() {
        this.app.removeSong(this.app.getPlaylistSize() - 1);
    }
}
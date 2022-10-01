import React, { Component } from 'react'

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);
        this.state = {songTitle: this.props.songTitle, songArtist: this.props.songArtist, songLink: this.props.songLink};
        
    }
    handleTitleChange = (event) => {
        this.setState({songTitle: event.target.value})
    }
    handleArtistChange = (event) => {
        this.setState({songArtist: event.target.value})
    }
    handleLinkChange = (event) => {
        this.setState({songLink: event.target.value})   
    }
    handleConfirm = (event) => {
        this.props.changeSongFromMarkCallback(this.state.songTitle, this.state.songArtist, this.state.songLink);
        this.props.editSongCallback();
    }
    render() {
        const { hideEditSongModalCallback} = this.props;
        // let title, artist, link = "";
        // if (currentList && currentList.songs[songIndex]) {
        //     title = currentList.songs[songIndex].title
        //     artist = currentList.songs[songIndex].artist
        //     link = currentList.songs[songIndex].youTubeId
        // }
        return (
            <div
                className="modal"
                id="edit-song-modal"
                data-animation="slideInOutLeft">
                    <div className="modal-root" id="verify-edit-song-root">
                        <div className="modal-north">
                            Edit song
                        </div>
                        <div className="modal-center">
                            Title: <input id="edit-song-title" type="text" value={this.state.songTitle} onChange={this.handleTitleChange}/>
                            Artist: <input id="edit-song-artist" type="text" value={this.state.songArtist} onChange={this.handleArtistChange}/>
                            YouTube Id: <input id="edit-song-link" type="text" value={this.state.songLink} onChange={this.handleLinkChange}/>
                        </div>
                        <div className="modal-south">
                            <input type="button"
                                id="edit-song-confirm-button"
                                className="modal-button"
                                onClick={this.handleConfirm}
                                value="Confirm" />
                            <input type="button"
                                id="edit-song-cancel-button"
                                className="modal-button"
                                onClick={hideEditSongModalCallback}
                                value="Cancel" />
                        </div>
                    </div>
            </div>
        )
    }
}
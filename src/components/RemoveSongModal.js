import React, { Component } from 'react'

export default class RemoveSongModal extends Component {
    render() {
        const { removeSongCallback, hideRemoveSongModalCallback, songIndex, currentList } = this.props;
        let title, artist = "";
        if (currentList && currentList.songs[songIndex]) {
            title = currentList.songs[songIndex].title
            artist = currentList.songs[songIndex].artist
        }
        return (
            <div
                className="modal"
                id="remove-song-modal"
                data-animation="slideInOutLeft">
                    <div className="modal-root" id="verify-remove-song-root">
                        <div className="modal-north">
                            Remove song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                            Are you sure you wish to remove {title} by {artist}?
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button"
                                id="remove-song-confirm-button"
                                className="modal-button"
                                onClick={removeSongCallback}
                                value="Confirm" />
                            <input type="button"
                                id="remove-song-cancel-button"
                                className="modal-button"
                                onClick={hideRemoveSongModalCallback}
                                value="Cancel" />
                        </div>
                    </div>
            </div>
        )
    }
}
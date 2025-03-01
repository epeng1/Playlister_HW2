import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        if (!targetId.includes("song-")) {
            return;
        }
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        if (!sourceId.includes("song-")) {
            return;
        }
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    handleRemoveSong = (event) => {
        event.stopPropagation();
        this.props.removeCallback(this.getItemNum() - 1);
    }
    handleClick = (event) => {
        if (event.detail === 2) {
            event.stopPropagation();
            this.props.editCallback(this.getItemNum() - 1);
        }
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        console.log("num: " + num);
        let itemClass = "playlister-song unselected-list-card";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to unselected-list-card";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
                onClick={this.handleClick}
            >
                {num}. 
                <a
                    title={song.title + " by " + song.artist}
                    target={"_blank"}
                    href={"https://youtube.com/watch?v=" + song.youTubeId}
                    rel={"noreferrer"}
                >
                    {song.title} by {song.artist}
                </a>
                
                <input
                    type={"button"}
                    id={"remove-song-" + num}
                    class={"list-card-button"}
                    value={"✕"}
                    onClick={this.handleRemoveSong}>
                </input>
                
            </div>
        )
    }
}
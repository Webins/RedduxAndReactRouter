import React from "react";
import "./playlist.css";
import MediaContainer from "../containers/MediaContainer";

function Playlist(props) {
  return (
    <div className="Playlist">
      {props.playlist.map(mediaId => {
        return (
          <MediaContainer
            openModal={props.handleOpenModal}
            id={mediaId}
            key={mediaId}
          />
        );
      })}
    </div>
  );
}

export default Playlist;

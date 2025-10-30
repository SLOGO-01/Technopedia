import React, { useRef } from "react"
import "./VideoPlayer.css"
import diar from "../../assets/Alor G - Down I'm a Rebel _ Glitch Session.mp4"

const VideoPlayer = ({playState, setPlayState})=>{

const player = useRef(null);

const closePlayer = (e) =>{
    if(e.target === player.current){
        setPlayState(false);
    }
}

    return(
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={diar} autoPlay muted controls></video>
        </div>
    )
}
export default VideoPlayer
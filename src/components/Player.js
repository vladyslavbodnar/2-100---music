import { useEffect, useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { PlayArrow, Pause, SkipPrevious, SkipNext } from "@material-ui/icons";

function Player({ currentSong, prevSong, nextSong }) {
    const [isPlay, setIsPlay] = useState(false);


    useEffect(() => {
        togglePlay("play");

        setIsPlay(true);
    }, [currentSong])

    const togglePlay = (action) => {
        if(action === "play") {
            for (const audio of document.querySelectorAll("audio")) {
                audio.play();
                setIsPlay(prev => !prev)
            }
        }
        if(action === "pause") {
            for (const audio of document.querySelectorAll("audio")) {
                audio.pause();
                setIsPlay(prev => !prev);
            }
        }
    }

    const songLineLength = () => {
        const duration = refSong.current.audioEl.current.duration;
        const active = refSong.current.audioEl.current.currentTime;
        const width = `${100 * active / duration}%`;
        activeLine.current.style.width = width;
    }

    const activeLine = useRef();

    const refSong = useRef();

    return (
        <div className="player">
            <div className="player__line"><div className="player__line-active" ref={activeLine}></div></div>

            <img src={currentSong.image} className="player__image" alt={currentSong.title} />
            <div className="player__text">
                <h1 className="player__title">{currentSong.title}</h1>
                <h2 className="player__author">{currentSong.author}</h2>
            </div>
            
            
            <div className="player__controls">
                <ReactAudioPlayer
                    src={currentSong.source}
                    preload="metadata"
                    onEnded={nextSong}
                    listenInterval={1}
                    ref={refSong}
                    onListen={songLineLength}
                />

                <button className="player__button" onClick={prevSong}><SkipPrevious /></button>
                <button className="player__button" onClick={() => (isPlay ? togglePlay("pause") : togglePlay("play"))}>{isPlay ? <Pause /> : <PlayArrow />}</button>
                <button className="player__button" onClick={nextSong}><SkipNext /></button>
            </div>
            
            
        </div>
    );
}

export default Player;

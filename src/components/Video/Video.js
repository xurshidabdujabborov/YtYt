import React, { useRef } from "react";
import videos from "../../assets/video/vid.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Container from "@mui/material/Container";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./Video.css";
import { useState } from "react";

function Video(props) {
    const [play, setPlay] = useState(false);
    const videoIcon = useRef();

    return (
        <div className="video">
            <Container maxWidth="xl">
               <div className="text">
               <h2 className="title">Как происходит обучение на YtYt?</h2>
                <p className="text">Обучение должно быть комфортным. Поэтому мы разработали собственную <br /> платформу для обучения программированию. На ней вы можете не только изучать <br /> теорию, но и запускать готовые примеры и даже писать свой собственный код.
                </p>
               </div>
                <div className="center">
                    <video src={videos} ref={videoIcon}></video>
                </div>
                {play ? (
                    <div
                        className="videoPlayerIcons"
                        onClick={() => {
                            videoIcon.current.pause();
                            setPlay(false);
                        }}
                    >
                        <PauseIcon />
                    </div>
                ) : (
                    <div
                        className="videoPlayerIcons"
                        onClick={() => {
                            videoIcon.current.play();
                            setPlay(true);
                        }}
                    >
                        <PlayArrowIcon />
                    </div>
                )}
                <div className="flex">
                    <button>Начать обучение <ArrowOutwardIcon/> </button>
                    <p className="text">Попробуйте, первые уроки <br /> бесплатны, но нужно пройти <br /> тестирование</p>
                </div>
            </Container>
        </div>
    );
}

export default Video;

import Layout from "../../../components/Layout/Layout";
import { ReactMediaRecorder } from "react-media-recorder";
import React from "react";

export default function CloudinaryVideo(props) {
    const render = (
        <React.Fragment>
            <p>This is a test for video record</p>
            <ReactMediaRecorder
                video
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                        <p>{status}</p>
                        <button onClick={startRecording}>Start Recording</button>
                        <button onClick={stopRecording}>Stop Recording</button>
                        <video src={mediaBlobUrl} controls autoPlay loop />
                    </div>
                )}
            />
        </React.Fragment>
    )
    return render;
}

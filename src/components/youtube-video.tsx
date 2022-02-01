import React from 'react';
import './youtube-video.css';

const YoutubeVideo = (props: { embedId: string; }) => {

    const id = props.embedId; 
    return (
        <div className="video-responsive">
            <iframe
                width="90%"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube video" />
        </div>
    );
};

export default YoutubeVideo;
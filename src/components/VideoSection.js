// src/components/VideoSection.js
import React from 'react';
import './VideoSection.css'; // You can create a separate CSS file for styling if needed

const VideoSection = () => {
    return (
        <div className="video-section">
          
            <iframe 
                width="100%" 
                height="480" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your actual video ID
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoSection;

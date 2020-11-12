import React from 'react';

import './VideoCard.css'

function VideoCard({image, title, description}) {
    return (
        <div className="videocard">
            <img
                src={require(`./images/${image}`)}
                alt="image"
            />
            <h2>{title}</h2>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export default VideoCard

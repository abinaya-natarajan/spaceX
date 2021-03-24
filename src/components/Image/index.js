import React from 'react';
import './styles.css';

function Image(props) {
    const { mission_patch_small, alt } = props;
    return (
        <div className="imageContainer">
            <img src={mission_patch_small} alt={alt} />
        </div>
    )
};

export default Image;
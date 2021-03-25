import React, {useState} from 'react';
import './styles.css';

const Image = (props) => {
    const [src, setSrc] = useState(props.mission_patch_small);

    const { alt } = props;
    const onErrorHandling = () => { // fallback url
        setSrc('https://via.placeholder.com/300X300');
    }
    return (
        <div className="imageContainer">
            <img onError={onErrorHandling} src={src} alt={alt} />
        </div>
    )
};

export default Image;
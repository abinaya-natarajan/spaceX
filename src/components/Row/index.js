import React from 'react';
import './styles.css';

const Row = (props) => {
    return (
        <div className="rowContainer">
            {props.children}
        </div>
    )
};

export default Row;


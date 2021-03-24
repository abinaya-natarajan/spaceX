import React from 'react';
import Tile from '../Tile';
import Row from '../Row';
import Column from '../Column';
import './styles.css';


const TileWrapper = (props) => {
    const { tilesData } = props;
    
    return (
        <div className="tileWrapperContainer">
            <Row>
                {tilesData.map((item) => {
                    return  <Column tablet={6} desktop={3}><Tile {...item}/></Column>
                })}
            </Row>
        </div>
    )
};

export default TileWrapper;


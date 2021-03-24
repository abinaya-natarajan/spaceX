import React from 'react';
import Image from '../Image';
import './styles.css';

const Tile = (props) => {
    const { flight_number, mission_name, launch_year, launch_success, links, mission_id } = props;
    return (
        <div className="tile">
            <Image {...links} alt={mission_name}/>

            <div className="copyWrapper">
                <h4>{`${mission_name} #${flight_number}`}</h4>
                <p><label>Mission Ids: </label>
                    <span>
                        { mission_id.length > 0 && 
                            <ul>
                                { mission_id.map((id) => {
                                    return <li>{id}</li>
                                })}
                            </ul>                            
                        }
                    </span>
                </p>
                <p><label>Launch Year: </label><span>{launch_year}</span></p>
                <p><label>Successful Launch: </label><span>{launch_success ? 'true' : 'false'}</span></p>
                {/* <p><label>Successful Landing: </label><span>{launch_success}</span></p> */}
            </div>
        </div>
    )
};

export default Tile;
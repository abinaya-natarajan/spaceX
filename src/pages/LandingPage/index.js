import React, {useState, useEffect} from 'react';
import SectionHeader from '../../components/SectionHeader';
import Filter from '../../components/FilterContainer';
import TileWrapper from '../../components/TileWrapper';
import Row from '../../components/Row';
import Column from '../../components/Column';
import './styles.css';


function LandingPage() {
    const [data, setData] = useState([]);
    const [launchYear, setLaunchYear] = useState('');
    const [launchSuccess, setLaunchSuccess] = useState('');
    const [landSuccess, setLandSuccess] = useState('');

    useEffect(function() {
        let url = 'https://api.spacexdata.com/v3/launches?limit=100';
        if(launchYear) {
            url = url + '&launch_year=' + launchYear;
        }
        if(launchSuccess) {
            url = url + '&launch_success=' + launchSuccess;
        }
        if(landSuccess) {
            url = url + '&land_success=' + landSuccess;
        }

        fetch(url)
        .then(response => response.json())
        .then(result =>  setData(result))
    }, [launchYear, launchSuccess, landSuccess]);

    const onHandleFilter = (section, label) => {
        if(section === 'year') {
            setLaunchYear(label);
        } else if (section === 'launch') {
            setLaunchSuccess(label);
        } else {
            setLandSuccess(label);
        }
    }
    
    return (
        <div className="landingPageContainer">
            <SectionHeader header='SpaceX Launch Programs'/>
            <div className="contentWrapper">
                <Row>
                    <Column tablet={3} desktop={2}>
                        <Filter filterChange={onHandleFilter} />
                    </Column>
                    <Column tablet={9} desktop={10}>
                        <TileWrapper tilesData={data}/>
                    </Column>
                </Row>
            </div>
        </div>
    );
}


export default LandingPage;
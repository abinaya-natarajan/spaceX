import React, {useState, useEffect, useContext} from 'react';
import SectionHeader from '../../components/SectionHeader';
import Filter from '../../components/FilterContainer';
import TileWrapper from '../../components/TileWrapper';
import Row from '../../components/Row';
import Column from '../../components/Column';
import {FilterContext} from '../../context/FilterContext';
import './styles.css';


const LandingPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { launchYear,
        launchSuccess,
        landSuccess
     } = useContext(FilterContext);


    useEffect(function() {
        setLoading(true);
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
        .then(result =>  {
            setData(result);
            setLoading(false);
        })
        .catch((error)=> {
            console.log(error);
            setLoading(false);
        })
    }, [launchYear, launchSuccess, landSuccess]);

    
    return (
        <div className="landingPageContainer">
            <SectionHeader header='SpaceX Launch Programs'/>
            <div className="contentWrapper">
                <Row>
                    <Column tablet={3} desktop={2}>
                        <Filter/>
                    </Column>
                    <Column tablet={9} desktop={10}>
                        {(!loading && data.length > 0) && <TileWrapper tilesData={data}/> }
                        {(!loading && data.length === 0) && <p className="noResult">No Result Found</p>}
                        {(loading) && <p className="loading">Loading....</p>}
                    </Column>
                </Row>
            </div>
            <footer>
                <b>Developed by:</b>
                <span>Abinaya Natarajan</span>
            </footer>
        </div>
    );
}


export default LandingPage;
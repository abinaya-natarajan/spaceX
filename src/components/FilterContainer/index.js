import React, {useContext} from 'react';
import Button from '../Button';
import {FilterContext} from '../../context/FilterContext';
import './styles.scss';

const filterOption = {
    years: ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
    launch:['true', 'false'],
    land:['true', 'false']
};

const FilterContainer = () => {
    const { launchYear,
        launchSuccess,
        landSuccess,
        setLaunchYear,
        setLaunchSuccess,
        setLandSuccess
     } = useContext(FilterContext);

    return (
        <div className="filterContainer">
            <h4>Filters</h4>
            <div className="launchYear filterSection">
                <p className="center">Launch Year</p>
                <div className="buttonWrapper">
                    {filterOption.years.map((year) => {
                       return <Button label={year} selectedLabel={launchYear} onclick={setLaunchYear} />
                    })}
                </div>
            </div>

            <div className="successfulLaunch filterSection">
                <p className="center">Succesful Launch</p>
                <div className="buttonWrapper">
                    {filterOption.launch.map((isLaunched)=> {
                        return <Button label={ isLaunched } selectedLabel={launchSuccess} onclick={setLaunchSuccess}/>
                    })}
                </div>
            </div>

            <div className="successfulLanding filterSection">
                <p className="center">Succesful Landing</p>
                <div className="buttonWrapper">
                    {filterOption.launch.map((isLand)=> {
                        return <Button label={ isLand } selectedLabel={landSuccess} onclick={setLandSuccess}/>
                    })}
                </div>
            </div>
        </div>
    )
};

export default FilterContainer;



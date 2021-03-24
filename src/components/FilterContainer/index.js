import React from 'react';
import Button from '../Button';
import './styles.css';

const years = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];

function FilterContainer(props) {
    const { filterChange } = props;
    return (
        <div className="filterContainer">
            <h4>Filters</h4>
            <div className="launchYear filterSection">
                <p className="center">Launch Year</p>
                <div className="buttonWrapper">
                    {years.map((year) => {
                       return <Button label={year} onclick={filterChange} type='year' name='year'/>
                    })}
                </div>
            </div>

            <div className="successfulLaunch filterSection">
                <p className="center">Succesful Launch</p>
                <div className="buttonWrapper">
                    <Button label="true" onclick={filterChange} type='launch' name='launch'/>
                    <Button label="false" onclick={filterChange} type='launch' name='launch'/>
                </div>
            </div>

            <div className="successfulLanding filterSection">
                <p className="center">Succesful Landing</p>
                <div className="buttonWrapper">
                    <Button label="true" onclick={filterChange} type='land' name='land'/>
                    <Button label="false" onclick={filterChange} type='land' name='land'/>
                </div>
            </div>
        </div>
    )
};

export default FilterContainer;



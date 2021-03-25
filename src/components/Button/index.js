import React from 'react';
import classnames from 'classnames';
import './styles.css';

const Button = (props) => {
    const { label, onclick, selectedLabel } = props;


    const onHandleClick = () => {
        onclick(selectedLabel === label ? '' : label);
    }

    return (
        <div className="buttonContainer">
            <div className="buttonWrap">
                <button 
                    type="button" 
                    className={
                        classnames('btn', 
                        selectedLabel === label ? 'active': ''
                        )}
                        onClick={onHandleClick}
                >
                    {label}
                </button>
            </div>
        </div>
    )
};

export default Button;
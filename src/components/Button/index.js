import React from 'react';
import './styles.css';

const Button = (props) => {
    const { label, onclick, type, name } = props;


    const onHandleClick = (e) => {
        
        var checkboxes = document.getElementsByName(name);
        checkboxes.forEach((item) => {
            if (item !== e.target) {
                item.checked = false; 
            }
        })
        if(e.target.checked) {
            onclick(type, label);
        } else {
            onclick(type, '');
        }
        

    }

    return (
        <div className="buttonContainer">
            <div className="buttonWrap">
            <input type="checkbox" onChange={onHandleClick} name={name} />
                <button 
                    type="button" 
                    className='btn'
                >
                    {label}
                </button>
                
            </div>

        </div>
    )
};

export default Button;
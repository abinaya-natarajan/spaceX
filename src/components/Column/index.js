import React from 'react';
import classnames from 'classnames';

function Column(props) {
    const { tablet, desktop } = props;
    return (
        <div className={
            classnames('columnContainer', 
            `col-${desktop}`,
            `col-s-${tablet}`
            )}>
            {props.children}
        </div>
    )
};

export default Column;


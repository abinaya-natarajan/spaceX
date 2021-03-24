import React from 'react';

function SectionHeader(props) {
    const { header } = props;
    return (
        <div className="sectionHeaderContainer">
            <h1>{header}</h1>
        </div>
    )
};

export default SectionHeader;